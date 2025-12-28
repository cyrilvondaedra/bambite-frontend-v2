# Home Page Implementation Plan

## Overview
This document outlines the implementation plan for the Home page based on the Figma design (node-id: 609-7699). The page is a complex, multi-section landing page with multiple hero sections, product showcases, and decorative elements.

## Page Structure Analysis

### 1. **Hero Section** (Top Section - ~853px height)
- **Background**: Dark textured background with food image overlay
- **Navbar**: Already implemented (NavbarV2)
- **Main Content**:
  - Large food dish image (center-left)
  - Mascot "Bam" character (left side)
  - Decorative vegetables (tomatoes, onion)
  - Orange "See Detail" button (bottom-left)
  - Blue info panel with:
    - Title: "Made to melt your stress" (gradient text)
    - Orange button: "SEE MENU"
    - Description text box
    - Socket screws (decorative)
    - Decorative "all of them" text (rotated)
- **Decorative Elements**:
  - Vines hanging from top corners
  - Orange glow effects
  - Vertical separator lines
  - Dark gradient overlay at top

### 2. **"NEW Taste NEW WORLD" Section** (~1458px height)
- **Background**: Light grey-blue with texture overlays
- **Title Section**:
  - "NEW Taste" (dark gradient text)
  - "NEW WORLD" (orange gradient text, large)
  - Decorative "C4" text (left side, large, semi-transparent)
- **Product Grid**: 
  - 6 product cards in 2 rows of 3
  - Each card uses existing ProductCard component
  - Cards positioned with absolute positioning on desktop
- **Decorative Elements**:
  - Vertical separator line (left side)
  - Vines (top-right)
  - Orange glow effects
  - Various decorative text elements ("Delicious xP", "Everything new")

### 3. **"Explore All New Cuisine" Section** (~508px height)
- **Background**: Dark textured background with image overlay
- **Content**:
  - Large title: "Explore All New Cuisine"
  - Food dish image
  - Decorative "Everything new" text (rotated)
- **Separator**: Horizontal line with decorative elements

### 4. **"My Home to Yours" Section** (~854px height)
- **Background**: Large blue plate with texture overlays
- **Content**:
  - Large title: "My Home to Yours" (gradient text)
  - Subtitle: "You're about to discover more" (rotated, orange)
  - Window frame with mystical forest scene:
    - Outer ring
    - Window frame border
    - Forest scene image
    - Glow light effects
  - Text: "BAm's spaceship 320" (bottom)
- **Decorative Elements**:
  - Large "D3" text (right side, semi-transparent)
  - Vines (top-right corner)
  - Vertical separator lines
  - Socket screws

### 5. **"Hi, I'm Bam" Section** (~816px height)
- **Background**: Dark forest/jungle scene with overlay
- **Content**:
  - Large title: "Hi, I'm Bam" (white text)
  - Large mascot image (3D front view)
  - Description text block
  - Decorative text: "You're about to discover more"
  - Blue button: "INTERESTED? MORE OF ME"
- **Decorative Elements**:
  - Vines (top-left)
  - Orange glow effects

### 6. **Footer** (Already Implemented)
- Footer component already exists and is in layout

## Component Breakdown

### New Components Needed:

1. **HomeBackground.tsx**
   - Multi-layered background for hero section
   - Dark texture base
   - Food image overlay
   - Gradient overlays
   - Orange glow effects

2. **HeroSection.tsx**
   - Main hero section container
   - Food dish image positioning
   - Mascot positioning
   - Info panel with CTA
   - Decorative elements

3. **HeroInfoPanel.tsx**
   - Blue plate background with textures
   - Title with gradient text
   - "SEE MENU" button
   - Description text box
   - Socket screws

4. **NewTasteSection.tsx**
   - Section container with light background
   - Title section with gradient text
   - Product grid layout
   - Decorative "C4" text
   - Vines and separator lines

5. **ExploreCuisineSection.tsx**
   - Dark background section
   - Title and food image
   - Decorative rotated text

6. **MyHomeToYoursSection.tsx**
   - Large blue plate background
   - Title section
   - Window frame component
   - Forest scene display
   - Decorative elements

7. **WindowFrame.tsx**
   - Outer ring
   - Window frame border
   - Image container
   - Glow light effects

8. **HiImBamSection.tsx**
   - Forest background
   - Title and mascot
   - Description and CTA button
   - Decorative elements

9. **VinesDecoration.tsx** (Reusable)
   - Vines component for various positions
   - Different sizes and rotations

## Data Structure

```typescript
// Hero section data
type HeroData = {
  title: string;
  description: string;
  ctaText: string;
  foodImage: string;
  mascotImage: string;
};

// Section data
type SectionData = {
  title: string;
  titleSecondary?: string;
  description?: string;
  products?: Product[];
  backgroundImage?: string;
  decorativeText?: string;
};
```

## Implementation Steps

### Phase 1: Background Components
1. Create `HomeBackground.tsx` for hero section
2. Create background components for other sections
3. Download and organize assets

### Phase 2: Hero Section
1. Create `HeroSection.tsx`
2. Create `HeroInfoPanel.tsx`
3. Integrate food dish and mascot images
4. Add decorative elements (vines, vegetables)
5. Implement "See Detail" button

### Phase 3: Product Sections
1. Create `NewTasteSection.tsx`
2. Integrate existing `ProductCard` components
3. Add decorative "C4" text
4. Create `ExploreCuisineSection.tsx`

### Phase 4: Special Sections
1. Create `MyHomeToYoursSection.tsx`
2. Create `WindowFrame.tsx` component
3. Create `HiImBamSection.tsx`
4. Add all decorative elements

### Phase 5: Integration & Responsiveness
1. Integrate all sections into `app/page.tsx`
2. Make all sections responsive
3. Test on different screen sizes
4. Optimize images and assets

## Technical Considerations

### Styling
- Use Tailwind CSS for all styling
- Implement gradient text using `bg-clip-text` and `text-transparent`
- Use absolute positioning for desktop to match Figma exactly
- Use responsive classes for mobile/tablet
- Implement mix-blend modes for texture overlays

### Images
- Use Next.js `Image` component with optimization
- Add appropriate `sizes` props
- Use `priority` for above-the-fold images
- Organize assets in `public/home-assets/`

### Performance
- Lazy load below-the-fold sections
- Optimize large background images
- Use CSS transforms for rotations instead of images where possible

### Responsive Design
- Mobile: Stack all elements vertically
- Tablet: Adjust grid layouts
- Desktop: Match Figma's absolute positioning
- Hide decorative elements on small screens if needed

## File Structure

```
app/
  page.tsx (main home page)
components/
  HomeBackground.tsx
  HeroSection.tsx
  HeroInfoPanel.tsx
  NewTasteSection.tsx
  ExploreCuisineSection.tsx
  MyHomeToYoursSection.tsx
  WindowFrame.tsx
  HiImBamSection.tsx
  VinesDecoration.tsx
public/
  home-assets/
    hero-food-image.png
    mascot-image.png
    vegetables/
    vines/
    decorative-elements/
    window-frame-assets/
    forest-scene.png
```

## Assets Needed

1. **Hero Section**:
   - Food dish image
   - Mascot image (Bam character)
   - Vegetable images (tomatoes, onion)
   - Vines (multiple variations)
   - Orange glow effects

2. **Product Sections**:
   - Product images (already have some)
   - Decorative "C4" text asset
   - Background textures

3. **My Home to Yours**:
   - Window frame assets (outer ring, frame border)
   - Forest scene image
   - Glow light effects

4. **Hi I'm Bam**:
   - Forest/jungle background
   - 3D mascot image
   - Vines

5. **General**:
   - Texture overlays (metal, grunge)
   - Socket screw assets
   - Separator line assets

## Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## Notes

- The design uses very precise absolute positioning on desktop
- Many decorative elements should be hidden on mobile
- Gradient text effects are used extensively
- Texture overlays create depth and visual interest
- Orange glow effects are used as accent elements
- Vines are a recurring decorative motif

