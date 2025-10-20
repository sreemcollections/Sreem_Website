# Scroll-Based Preview Animation for Mobile

## Overview
Implemented automatic preview animations that trigger when product cards scroll into view on mobile devices, providing an engaging browsing experience without requiring user interaction.

## Feature Implementation

### Intersection Observer API
Uses the Intersection Observer API to detect when product cards enter the viewport during scrolling.

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Auto-hide after 2 seconds
          setTimeout(() => {
            setIsInView(false);
          }, 2000);
        }
      });
    },
    {
      threshold: 0.5, // Trigger at 50% visibility
      rootMargin: '0px'
    }
  );
}, []);
```

### Key Configuration
- **Threshold: 0.5** - Animation triggers when 50% of the card is visible
- **Duration: 2 seconds** - Preview automatically hides after 2 seconds
- **Device Detection** - Only applies to mobile (screen width < 768px)
- **Clean Up** - Properly unobserves elements on component unmount

## User Experience Flow

### Mobile Browsing (< 768px width)
1. User scrolls through product listing
2. When card enters viewport (50% visible):
   - Preview overlay fades in smoothly
   - Image slider dots appear
   - "View Details" button slides up
   - Gradient overlay appears
3. Preview displays for 2 seconds
4. Overlay automatically fades out
5. User continues scrolling to see next products

### Additional Interactions (Still Available)
- **Tap Card:** Shows preview for 2 seconds (extends preview time)
- **Click Card:** Navigates to product detail page
- **Tap Slider Dots:** Changes displayed image

### Desktop Browsing (≥ 768px width)
- No scroll-based animation (performance optimization)
- Traditional hover interactions remain:
  - Hover shows preview
  - Hover shows image zoom
  - Hover shows navigation dots

## Technical Details

### State Management
```tsx
const [isHovered, setIsHovered] = useState(false);    // Desktop hover
const [isTouched, setIsTouched] = useState(false);    // Mobile tap
const [isInView, setIsInView] = useState(false);      // Scroll detection
const cardRef = useRef<HTMLDivElement>(null);         // Card reference
```

### Preview Logic
```tsx
const showPreview = isHovered || isTouched || (isInView && window.innerWidth < 768);
```

Preview shows when:
- User hovers (desktop) OR
- User taps (mobile) OR
- Card is in viewport AND on mobile device

### Performance Optimizations

1. **Threshold at 50%** - Prevents premature triggering
2. **Auto-timeout** - Prevents overlays from staying visible
3. **Device-specific** - Only activates on mobile (< 768px)
4. **Single observer** - One observer per card, cleaned up properly
5. **Smooth transitions** - 500ms duration prevents jarring effects

### Memory Management
```tsx
return () => {
  if (cardRef.current) {
    observer.unobserve(cardRef.current); // Clean up observer
  }
};
```

## Visual Feedback

### Elements Shown in Preview
1. **Gradient Overlay** - Dark gradient from bottom to top
2. **Image Slider Dots** - White dots showing available images
3. **View Details Button** - White button with eye icon
4. **Help Text** - Context-aware message:
   - Mobile: "Scroll to see preview"
   - Desktop: "Click to explore this item"

### Animation Timing
- **Fade In:** 500ms (opacity + transform)
- **Display Duration:** 2000ms (2 seconds)
- **Fade Out:** 500ms (opacity + transform)
- **Total Cycle:** ~3 seconds per card

## Browser Compatibility

### Intersection Observer Support
- ✅ Chrome 51+ (Android/Desktop)
- ✅ Firefox 55+ (Android/Desktop)
- ✅ Safari 12.1+ (iOS/macOS)
- ✅ Edge 15+
- ✅ Samsung Internet 5+
- ✅ Opera 38+

### Fallback Behavior
On older browsers without Intersection Observer:
- Cards still show preview on tap
- Desktop hover still works
- No scroll-based animation (graceful degradation)

## User Benefits

### Engagement
- **Passive Discovery:** Users see previews without explicit interaction
- **Visual Interest:** Dynamic content while scrolling
- **Clear CTAs:** "View Details" button appears automatically

### Usability
- **Non-intrusive:** Auto-hides after 2 seconds
- **Still Controllable:** Users can tap to extend preview
- **Performant:** Only active on mobile devices
- **Smooth:** All transitions are hardware-accelerated

### Accessibility
- **Clear Timing:** 2-second display is enough to read content
- **No Constant Animation:** Prevents motion sickness
- **Tap Override:** Users can manually trigger preview
- **Visual Hierarchy:** Important elements remain visible

## Testing Recommendations

### Mobile Testing
- [ ] Test on iOS Safari (iPhone)
- [ ] Test on Chrome Mobile (Android)
- [ ] Test on different screen sizes (320px to 768px)
- [ ] Verify smooth scrolling performance
- [ ] Check animation timing (2s duration)
- [ ] Test rapid scrolling behavior
- [ ] Verify memory cleanup (no leaks)

### Edge Cases
- [ ] Very fast scrolling (cards scroll past quickly)
- [ ] Slow scrolling (multiple cards in view)
- [ ] Scroll back up (cards re-entering from top)
- [ ] Page with few products (all in viewport)
- [ ] Long product lists (many observers)

### Performance Testing
- [ ] Measure FPS during scroll on older devices
- [ ] Check CPU usage with many cards
- [ ] Verify smooth animations on 3G/4G
- [ ] Test battery impact during extended browsing
- [ ] Monitor memory usage over time

## Configuration Options

You can adjust these values in ProductCard.tsx:

```tsx
// Visibility threshold (0.0 to 1.0)
threshold: 0.5  // Change to 0.3 for earlier trigger

// Preview duration (milliseconds)
setTimeout(() => setIsInView(false), 2000)  // Change to 3000 for longer

// Mobile breakpoint (pixels)
window.innerWidth < 768  // Change to 1024 for tablets
```

## Future Enhancements

- [ ] Add user preference to disable auto-preview
- [ ] Implement prefers-reduced-motion support
- [ ] Add option to pause animation on user scroll
- [ ] Implement lazy loading for images
- [ ] Add analytics tracking for view rates
- [ ] Consider infinite scroll integration
- [ ] Add smooth scroll snap points
- [ ] Implement virtual scrolling for large lists

## Analytics Opportunities

Track user engagement:
```tsx
if (entry.isIntersecting) {
  // Track impression
  analytics.track('product_viewed', { productId: id });
}
```

## Known Limitations

1. **Initial Load:** First card may animate immediately if in viewport
2. **Rapid Scroll:** Users scrolling very fast may miss animations
3. **Multiple Cards:** Several cards may animate simultaneously
4. **Device Detection:** Uses simple width check (not feature detection)

## Conclusion

This feature significantly enhances mobile browsing by providing automatic, engaging previews as users scroll through products. The implementation is performant, accessible, and provides a luxury catalog experience on mobile devices.
