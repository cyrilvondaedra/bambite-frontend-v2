# Product Details Page Implementation Plan

## Overview
This document outlines the implementation plan for the Product Details Page based on the Figma design (node-id: 609-6979).

## Page Structure Analysis

### 1. **Main Layout**
- **Background**: Black texture background with multiple layers
- **Navbar**: GlobalNav component (already exists in layout)
- **Content Area**: Two-column layout
  - Left: Product image gallery
  - Right: Product details panel
- **Related Products Section**: "You may also like" with product cards
- **Footer**: Already implemented in layout

### 2. **Left Column - Product Image Gallery**
- **Thumbnail Strip**: Vertical strip of 5 thumbnail images (92px width each)
- **Main Image Display**: Large product image (527.688px × 665.016px)
- **Image Navigation**: Click thumbnails to change main image

### 3. **Right Column - Product Details Panel**
- **Product Title**: 
  - English: "Bam's Bites" (gradient text)
  - Thai: "ก้อนเซโมลินา" (Noto Sans Thai Looped)
- **Price Badge**: "120 THB" in gradient background
- **Description**: Product description text
- **Size Selector**: 
  - Two options: "Small" and "Big"
  - Socket-style buttons with active/inactive states
  - Selected option has checkmark indicator
- **Add to Cart Section**:
  - Blue plate button with shopping cart icon
  - Quantity controls (minus, number, plus)
  - "add to cart" text
- **Buy Now Button**:
  - Dark plate button
  - Shows price: "Buy Now 120 THB"
- **FAQ Accordion**:
  - Multiple accordion items
  - Expandable/collapsible content
  - Border styling changes on expand

### 4. **Related Products Section**
- **Section Title**: "You may also like" (gradient text)
- **Product Cards**: 3 product cards in a row
  - Reuse existing `ProductCard` component
  - Same styling as menu page

### 5. **Decorative Elements**
- Orange blur effects (top and bottom)
- Vertical separator lines
- Background textures and overlays
- Decorative plates and screws (similar to footer)

## Component Breakdown

### New Components to Create

1. **`ProductImageGallery.tsx`**
   - Thumbnail strip (left side)
   - Main image display
   - Image selection state management
   - Responsive image handling

2. **`ProductDetailsPanel.tsx`**
   - Product title and subtitle
   - Price badge
   - Description
   - Size selector
   - Add to cart section
   - Buy now button
   - FAQ accordion

3. **`SizeSelector.tsx`**
   - Socket-style button group
   - Active/inactive states
   - Checkmark indicator for selected option

4. **`ProductDetailsBackground.tsx`**
   - Multi-layer background
   - Texture overlays
   - Decorative elements
   - Orange blur effects

5. **`FAQAccordion.tsx`**
   - Accordion item component
   - Expand/collapse functionality
   - Border styling changes

6. **`RelatedProductsSection.tsx`**
   - Section title
   - Grid of product cards
   - Reuse `ProductCard` component

### Existing Components to Reuse

- `NavbarV2` (already in layout)
- `ProductCard` (from menu page)
- `Footer` (already in layout)

## Data Structure

```typescript
interface Product {
  id: string;
  name: string;
  nameThai: string;
  price: number;
  currency: string;
  description: string;
  images: string[]; // Array of image URLs
  sizes: SizeOption[];
  faqs: FAQ[];
}

interface SizeOption {
  id: string;
  label: string;
  price?: number; // Optional price difference
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}
```

## Implementation Steps

### Phase 1: Core Structure
1. Create page route: `app/products/[id]/page.tsx`
2. Create `ProductDetailsBackground.tsx` component
3. Set up basic layout structure (two columns)

### Phase 2: Image Gallery
1. Create `ProductImageGallery.tsx`
2. Implement thumbnail navigation
3. Add image loading states
4. Make responsive

### Phase 3: Product Details Panel
1. Create `ProductDetailsPanel.tsx`
2. Create `SizeSelector.tsx`
3. Implement quantity controls
4. Add to cart functionality
5. Buy now button

### Phase 4: FAQ Section
1. Create `FAQAccordion.tsx`
2. Implement expand/collapse logic
3. Style accordion items

### Phase 5: Related Products
1. Create `RelatedProductsSection.tsx`
2. Fetch related products
3. Display product cards

### Phase 6: Responsive Design
1. Make image gallery responsive
2. Stack columns on mobile
3. Adjust spacing and sizing
4. Hide decorative elements on mobile

### Phase 7: Polish & Assets
1. Download all required assets
2. Add texture overlays
3. Implement blur effects
4. Fine-tune positioning

## Technical Considerations

### Styling
- Use Tailwind CSS for responsive design
- Implement gradient text effects
- Add texture overlays with mix-blend modes
- Use absolute positioning for decorative elements

### State Management
- Product selection state
- Image gallery active image
- Size selection
- Quantity state
- FAQ accordion open/closed states

### Image Optimization
- Use Next.js `Image` component
- Implement lazy loading for thumbnails
- Add `sizes` prop for responsive images
- Optimize image formats

### Responsive Breakpoints
- Mobile: < 640px (stack columns, hide decorative elements)
- Tablet: 640px - 1024px (adjusted spacing)
- Desktop: > 1024px (full layout with decorative elements)

## File Structure

```
app/
  products/
    [id]/
      page.tsx
components/
  ProductImageGallery.tsx
  ProductDetailsPanel.tsx
  SizeSelector.tsx
  ProductDetailsBackground.tsx
  FAQAccordion.tsx
  RelatedProductsSection.tsx
public/
  product-details-assets/
    (background textures, decorative elements)
  product-images/
    (product images)
```

## Assets Required

### Background & Textures
- Black texture background
- Metal overlay textures
- Grunge overlay textures
- Orange blur effects

### Decorative Elements
- Separator lines (vertical and horizontal)
- Decorative plates
- Screw icons
- Vines and decorative images

### Icons
- Shopping cart icon
- Plus icon
- Minus icon
- Checkmark icon
- Arrow down/up for accordion

### Product Images
- Main product images
- Thumbnail images

## Next Steps

1. Review and approve this plan
2. Start with Phase 1: Core Structure
3. Build components incrementally
4. Test responsiveness at each phase
5. Final polish and asset integration

