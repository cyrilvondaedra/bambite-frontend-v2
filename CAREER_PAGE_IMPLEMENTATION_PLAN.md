# Career Page Implementation Plan

## Overview
This document outlines the implementation plan for the Career/Jobs page based on the Figma design (node-id: 706-4063).

## Page Structure Analysis

### 1. **Main Layout**
- **Background**: Dark blue plate with multi-layer textures
- **Navbar**: GlobalNav component (already exists in layout)
- **Content Area**: 
  - Mission statement section
  - "Join Bam's Team" title section
  - Job listings grid (3 cards)
- **Footer**: Already implemented in layout

### 2. **Top Section - Mission Statement**
- **Location**: Top of content area
- **Content**: 
  - Paragraph text: "We're fast moving team that stive to offer the best Asian food in Thailand. We're looking for those who share the same values: quality, dedication, and velocity, with us."
  - Three blue diamond bullet points (rotated checkmarks)
  - Large decorative "C2" text in background (faded)
- **Styling**: White text on dark background

### 3. **Left Column - "Join Bam's Team" Section**
- **Title**: "Join Bam's Team" (gradient text, large 64px)
- **Decorative Text**: "Join us!" (rotated, handwritten style, orange/brown color)
- **Positioning**: Left side of content area

### 4. **Right Column - Job Cards Grid**
- **Layout**: 3 job cards in a horizontal row
- **Each Job Card Contains**:
  - **Card Background**: Dark blue plate with texture overlays
  - **Job Title**: "Office staff" (large white text, 32px)
  - **Category**: "OFFICE" (small uppercase text, 13px)
  - **Job Details**:
    - Working hours: 9am - 5pm
    - Contract: No
    - Salary: Negotiate
    - Close date: 18 Dec 2025
  - **Decorative Elements**:
    - Socket screws (4 corners)
    - Vertical separator line
    - Horizontal separator line
  - **Apply Now Button**: 
    - Light blue gradient button
    - "APPLY NOW" text with arrow icon
    - Texture overlays

### 5. **Background Elements**
- Dark blue plate background with textures
- Orange blur effects (top right, bottom left)
- Vertical separator lines
- Decorative "C2" text (faded, large)
- Metal and grunge texture overlays

## Component Breakdown

### New Components to Create

1. **`CareerBackground.tsx`**
   - Dark blue plate background
   - Texture overlays (metal, grunge)
   - Orange blur effects
   - Separator lines
   - Decorative "C2" text

2. **`MissionStatement.tsx`**
   - Mission statement paragraph
   - Three blue diamond bullet points
   - Responsive text sizing

3. **`JoinBamsTeamSection.tsx`**
   - "Join Bam's Team" title (gradient text)
   - "Join us!" decorative text (rotated)
   - Responsive layout

4. **`JobCard.tsx`**
   - Job card container with texture background
   - Job title and category
   - Job details list
   - Socket screws (decorative)
   - Separator lines
   - Apply Now button

5. **`JobListingsSection.tsx`**
   - Grid container for job cards
   - Responsive layout (1 column mobile, 3 columns desktop)

### Existing Components to Reuse

- `NavbarV2` (already in layout)
- `Footer` (already in layout)
- `SocketScrew` (can extract from Footer or create reusable)

## Data Structure

```typescript
interface Job {
  id: string;
  title: string;
  category: string;
  workingHours: string;
  contract: string;
  salary: string;
  closeDate: string;
  onApply?: () => void;
}

interface MissionStatement {
  text: string;
  bullets?: string[]; // Optional bullet points
}
```

## Implementation Steps

### Phase 1: Core Structure
1. Create page route: `app/career/page.tsx`
2. Create `CareerBackground.tsx` component
3. Set up basic layout structure

### Phase 2: Mission Statement
1. Create `MissionStatement.tsx` component
2. Implement bullet points with blue diamonds
3. Add decorative "C2" background text

### Phase 3: Join Bam's Team Section
1. Create `JoinBamsTeamSection.tsx` component
2. Implement gradient title
3. Add rotated "Join us!" decorative text

### Phase 4: Job Cards
1. Create `JobCard.tsx` component
2. Implement texture background
3. Add job details
4. Create Apply Now button
5. Add decorative screws and separators

### Phase 5: Job Listings Grid
1. Create `JobListingsSection.tsx` component
2. Implement responsive grid
3. Integrate JobCard components

### Phase 6: Responsive Design
1. Make mission statement responsive
2. Stack job cards on mobile
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
- Rotate elements using CSS transforms

### State Management
- Job application state (if needed)
- Modal/dialog state for application form (future)

### Image Optimization
- Use Next.js `Image` component
- Implement lazy loading
- Add `sizes` prop for responsive images

### Responsive Breakpoints
- Mobile: < 640px (stack columns, hide decorative elements)
- Tablet: 640px - 1024px (2 columns for job cards)
- Desktop: > 1024px (full layout with decorative elements)

## File Structure

```
app/
  career/
    page.tsx
components/
  CareerBackground.tsx
  MissionStatement.tsx
  JoinBamsTeamSection.tsx
  JobCard.tsx
  JobListingsSection.tsx
  SocketScrew.tsx (reusable)
public/
  career-assets/
    (background textures, decorative elements)
```

## Assets Required

### Background & Textures
- Dark blue plate background
- Metal overlay textures
- Grunge overlay textures
- Orange blur effects

### Decorative Elements
- Separator lines (vertical and horizontal)
- Socket screw icons
- Blue diamond bullet points
- Decorative "C2" text (or generate with CSS)

### Icons
- Arrow right icon (for Apply Now button)

## Key Design Details

### Job Card Styling
- Background: Dark blue plate with rounded corners (top)
- Texture: Metal overlay (30% opacity, overlay blend)
- Texture: Grunge overlay (19% opacity, lighten blend)
- Texture: Gradient overlay (30% opacity, soft-light blend)
- Border: Subtle emboss effect
- Screws: 4 corner screws (blue color #13243c)
- Separators: Vertical and horizontal lines

### Apply Now Button
- Background: Light blue gradient (from #c2d4db to #9cb2ba)
- Border: Blue (#193551)
- Text: Dark blue (#273b4f)
- Icon: Arrow right
- Texture overlays similar to job card

### Typography
- Title: Chillax Variable Semibold, 64px, gradient text
- Job Title: Chillax Variable Semibold, 32px, white
- Category: Space Mono Bold, 13px, uppercase, white
- Details: DM Sans Regular, 14px, white (75% opacity)
- Button: Space Mono Bold, 12.583px, uppercase

## Next Steps

1. Review and approve this plan
2. Start with Phase 1: Core Structure
3. Build components incrementally
4. Test responsiveness at each phase
5. Final polish and asset integration

