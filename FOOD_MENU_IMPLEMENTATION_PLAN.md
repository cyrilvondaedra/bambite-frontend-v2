# Food Menu Page Implementation Plan

## Overview
This document outlines the implementation plan for the Food Menu page based on the Figma design (node-id: 706:5833).

## Page Structure

### 1. Main Layout Components
```
Food Menu Page
├── Global Nav (already exists)
├── Page Header
│   ├── Title: "BamBite Menu"
│   └── Tagline: "All the best in one place"
├── Content Area
│   ├── Filter Panel (Left Side)
│   └── Product Grid (Right Side)
└── Footer
```

## Component Breakdown

### 1. ProductCard Component
**Location:** `components/ProductCard.tsx`

**Props:**
- `image`: string (product image URL)
- `title`: string (English title)
- `titleThai`: string (Thai title)
- `price`: number (price in THB)
- `description`: string
- `quantity`: number (default: 1)
- `onQuantityChange`: (qty: number) => void
- `onAddToCart`: () => void

**Structure:**
- **Top Section (Orange Plate):**
  - Background: Orange plate with texture overlay
  - Product image (circular/rounded)
  - Title (English + Thai)
  - Price badge (120THB)
  - Description text

- **Bottom Section (Blue Plate):**
  - Gradient background (#074980 to #172743)
  - Metal texture overlays
  - Left: Shopping cart icon button
  - Center: "ADD TO CART" button
  - Right: Quantity selector (+ 1 -)
  - Inset shadow for embossed effect

**Styling Notes:**
- Fonts: Chillax Variable (Semibold) for title, Noto Sans Thai Looped (Medium) for Thai text, DM Sans (Medium) for description, Space Mono (Bold) for buttons
- Colors: White text, #b9c7d6 for price badge background, #181e24 for price text
- Dimensions: 335px width, 438px height

### 2. FilterPanel Component
**Location:** `components/FilterPanel.tsx`

**Props:**
- `categories`: string[] (list of category names)
- `activeCategory`: string
- `onCategoryChange`: (category: string) => void

**Structure:**
- Dark metallic background with texture
- "FILTER" title (Space Mono Bold, uppercase)
- Category list with active state highlighting
- Active category: Blue highlight (#489adc) with arrow icon
- Inactive categories: 50% opacity white text
- Decorative wave pattern at bottom

**Categories:**
- Noodles (default active)
- Puddings
- Soups
- Salads

**Styling Notes:**
- Background: Dark grey with metallic texture
- Border: Subtle border with glow effect
- Dimensions: ~282px width, ~370px height

### 3. MenuSection Component
**Location:** `components/MenuSection.tsx`

**Props:**
- `title`: string (e.g., "Noodles", "Puddings")
- `products`: Product[]
- `onAddToCart`: (product: Product) => void

**Structure:**
- Section title (large, dark grey)
- Grid of ProductCard components
- Responsive grid: 3 columns on desktop, 2 on tablet, 1 on mobile

### 4. FoodMenuPage Component
**Location:** `app/menu/page.tsx` (or appropriate route)

**Structure:**
- Uses FirstBackground component for background
- Contains FilterPanel and MenuSection components
- Manages state for active category and cart
- Handles filtering logic

## Data Structure

### Product Type
```typescript
type Product = {
  id: string;
  title: string;
  titleThai: string;
  price: number;
  description: string;
  image: string;
  category: 'noodles' | 'puddings' | 'soups' | 'salads';
};
```

## Implementation Steps

### Phase 1: Core Components
1. ✅ Create ProductCard component
   - Implement orange plate section with image
   - Implement blue plate section with controls
   - Add quantity selector functionality
   - Add add to cart button

2. ✅ Create FilterPanel component
   - Implement category list
   - Add active state styling
   - Add click handlers

3. ✅ Create MenuSection component
   - Implement grid layout
   - Integrate ProductCard components

### Phase 2: Page Integration
4. ✅ Create FoodMenuPage route
   - Set up page structure
   - Integrate FilterPanel and MenuSection
   - Add background using FirstBackground

5. ✅ Implement State Management
   - Category filtering
   - Cart state (if needed)
   - Product data management

### Phase 3: Styling & Polish
6. ✅ Apply textures and overlays
   - Metal texture overlays
   - Grunge overlays
   - Gradient effects

7. ✅ Add decorative elements
   - Wave patterns
   - Border effects
   - Shadow effects

8. ✅ Responsive design
   - Mobile breakpoints
   - Tablet breakpoints
   - Desktop optimization

### Phase 4: Assets & Images
9. ✅ Download and organize assets
   - Product images
   - Texture overlays
   - Icons (shopping cart, plus, minus)
   - Decorative elements

10. ✅ Optimize images
    - Convert to appropriate formats
    - Add to public folder
    - Use Next.js Image component

## Technical Considerations

### Fonts (Already Configured)
- Chillax Variable (Semibold) - Titles
- Noto Sans Thai Looped (Medium) - Thai text
- DM Sans (Medium) - Descriptions
- Space Mono (Bold) - Buttons and labels

### Colors
- Background: Dark grey (#181e24)
- Text: White with varying opacity
- Accent: Blue (#489adc)
- Price badge: #b9c7d6
- Orange plate: Gradient orange tones
- Blue plate: Gradient (#074980 to #172743)

### Spacing & Layout
- Product grid: 3 columns, gap between items
- Filter panel: Fixed width on left
- Content area: Flexible width on right
- Section spacing: Adequate padding between sections

### Interactions
- Category filter: Click to change active category
- Quantity selector: Increment/decrement buttons
- Add to cart: Button click handler
- Hover states: Add visual feedback

## File Structure
```
app/
  menu/
    page.tsx          # Main menu page
components/
  ProductCard.tsx     # Individual product card
  FilterPanel.tsx      # Category filter sidebar
  MenuSection.tsx      # Product section with title
public/
  products/           # Product images
  textures/           # Texture overlays
  icons/              # Icons (cart, plus, minus)
```

## Next Steps
1. Start with ProductCard component (most complex)
2. Then FilterPanel (simpler, isolated)
3. Integrate into page layout
4. Add state management
5. Polish styling and effects

