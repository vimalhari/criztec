---
description: How to generate, convert, and upload premium images for Criztec
---

# Image Generation & Deployment Workflow

Follow these steps to create and implement high-quality, performance-optimized images for the Criztec website.

## 1. Image Generation

Use the `generate_image` tool with prompts that align with the Criztec Brand Identity.

### Brand Aesthetic Guidelines

- **Core Aesthetic**: Premium Glassmorphism, 3D Isometric, Futuristic.
- **Color Palette**: **Orange, Amber, and Gold** accents (primary colors). Use dark/slate backgrounds (rgb 15 23 42) for high contrast.
- **Visual Elements**: Glowing nodes, holographic data visualizations, transparent glass panels, sleek tech infrastructure.
- **Typography**: Do not include any text in the image.

> "A premium 3D isometric visualization of [Subject], focusing on [Detail]. Glassmorphism aesthetic with glowing orange and amber nodes, holographic data layers, sleek dark slate background. Professional and high-tech, 8k resolution. No text."

### Section-Specific Aspect Ratios

- **Hero Sections**: 1.9:1 Aspect Ratio (Target: 1200x630px). Use prompts like "Cinematic wide-angle" or "Panoramic composition".
- **Content/Feature Sections**: 1:1 Aspect Ratio (Target: 800x800px or larger).

## 2. Format Conversion & Cropping

All images must be in **WebP** format. For Hero images, use `sharp` to crop the generated square image to the required widescreen dimensions.

// turbo

```powershell
# For Hero images (Crop to 1.9:1)
node -e "const sharp = require('sharp'); sharp('input.png').resize(1200, 630, { fit: 'cover', position: 'center' }).webp().toFile('output.webp')"

# For standard 1:1 images
npx sharp-cli -i "input.png" -o "output.webp"
```

## 3. Cloudflare R2 Upload

Upload the WebP image to the `criztec` R2 bucket.

// turbo

```powershell
npx wrangler r2 object put criztec/image-name.webp --file="path/to/image-name.webp" --remote
```

## 4. Implementation in Astro

Update the relevant Astro component to use the new asset URL.

**Base URL**: `https://assets.criztec.com/`

**Example Component Update:**

```astro
<Hero
  image={{
    src: 'https://assets.criztec.com/image-name.webp',
    alt: 'Descriptive alt text',
    width: 1200,
    height: 630,
  }}
/>
```

## 5. Verification

- Visit the page on `localhost:4321`.
- Verify the image loads from the `assets.criztec.com` domain and uses the `.webp` extension.
