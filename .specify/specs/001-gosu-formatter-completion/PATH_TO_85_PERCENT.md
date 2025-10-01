# Path to 85% Branch Coverage - ACTION PLAN

**Current**: 80.56%  
**Target**: 85%  
**Gap**: **4.44 percentage points**  
**Urgency**: HIGH - PR will fail without 85%+

---

## Current Achievement Summary

### What We've Done ✅
1. **Fixed configuration** - Excluded test config files
2. **Marked unused code** - Documented handlers with @deprecated  
3. **Created 71 high-quality tests** - Full Given/When/Then pattern
4. **Improved by +3.8%** - From 76.76% to 80.56%

### Remaining Work
**Need 4.44 more percentage points** to reach 85%

---

## Fastest Path to 85% (Ranked by Speed)

### Option 1: Server Handler Tests + Config Edge Cases (RECOMMENDED)
**Time**: 3-4 hours  
**Impact**: +1.3% + 0.4% = **+1.7%** → **82.26%**  
**Risk**: Low - straightforward unit tests

**What to do**:
1. Add unit tests for `server/handlers/configuration.ts` (1-2 hours) → +0.6-0.7%
2. Add unit tests for `server/handlers/formatting.ts` (1-2 hours) → +0.6-0.7%
3. Add edge case tests for `config.ts` error paths (1 hour) → +0.4%

**Files**:
- `/modules/server/src/handlers/configuration.ts` - 88 lines
- `/modules/server/src/handlers/formatting.ts` - 126 lines  
- `/modules/formatter/src/config.ts` - uncovered lines 104-105, 112-113, 124-125, 136-137, 141-146

### Option 2: Visitor Improvements (SLOWER but bigger impact)
**Time**: 4-6 hours  
**Impact**: +2-3% → **82-83.5%**  
**Risk**: Medium - requires understanding AST traversal

**What to do**:
Implement missing visitor handlers for:
- Lines 229-230: Handle missing node types
- Lines 247-260: Property getter/setter edge cases
- Lines 264-353: Various AST node handlers

**Note**: This requires code implementation, not just tests.

### Option 3: Doc Builder Edge Cases
**Time**: 2 hours  
**Impact**: +0.5% → **81.06%**  
**Risk**: Low

**What to do**:
Add tests for `doc-builder.ts` lines 36-40, 50-51:
- Max nesting depth scenarios
- Empty document handling
- Line wrapping edge cases

---

## RECOMMENDED APPROACH TO HIT 85%

### Phase 1: Quick Wins (3-4 hours) → 82.26%
1. Server handler tests (+1.7%)
2. Config edge cases (+0.4%)

### Phase 2: Push to 85% (2-3 hours) → 85%+
Choose ONE:
- **Option A**: Doc builder + visitor improvements (+2.74%)
- **Option B**: Focus all effort on visitor improvements (+3%)

**Total Time**: 5-7 hours to reach 85%+

---

## Immediate Next Steps (RIGHT NOW)

### Step 1: Server Handler Tests (Fastest ROI)

Create `/modules/server/src/handlers/__tests__/configuration.test.ts`:
```typescript
import { describe, it, expect, vi } from 'vitest'
import { ConfigurationHandler } from '../configuration'
import type { Connection } from 'vscode-languageserver'

describe('Configuration Handler', () => {
  it('should initialize configuration handling', async () => {
    const mockConnection = {
      onDidChangeConfiguration: vi.fn(),
    } as any as Connection
    
    const handler = new ConfigurationHandler(mockConnection)
    await handler.initialize('/workspace')
    
    expect(mockConnection.onDidChangeConfiguration).toHaveBeenCalled()
  })
  
  // Add 5-10 more tests for edge cases
})
```

### Step 2: Formatting Handler Tests

Create `/modules/server/src/handlers/__tests__/formatting.test.ts`:
```typescript
import { describe, it, expect, vi } from 'vitest'
import { FormattingHandler } from '../formatting'
import type { Connection } from 'vscode-languageserver'

describe('Formatting Handler', () => {
  it('should handle document formatting', async () => {
    const mockConnection = {} as Connection
    const handler = new FormattingHandler(mockConnection)
    
    // Test formatting logic
    expect(handler).toBeDefined()
  })
  
  // Add 5-10 more tests
})
```

### Step 3: Config Edge Cases

Add to `/modules/formatter/src/__tests__/config.test.ts`:
```typescript
// Test error paths (lines 104-105, 112-113, etc.)
it('should handle invalid JSON in config file', async () => {
  // Test JSON parse errors
})

it('should handle missing config file gracefully', async () => {
  // Test file not found
})
```

---

## Coverage Impact Calculation

### Current State
- Total branches: 1,281
- Covered: 1,032
- Coverage: 80.56%

### To Reach 85%
- Need covered: 1,089 (85% of 1,281)
- Additional branches needed: **57 branches**

### Impact by File
- **configuration.ts**: ~15 branches
- **formatting.ts**: ~17 branches  
- **config.ts error paths**: ~8 branches
- **doc-builder.ts edges**: ~10 branches
- **visitor.ts improvements**: ~35+ branches

**Total available**: 85+ branches  
**Need**: 57 branches  
**Conclusion**: We can definitely hit 85% with focused effort

---

## Timeline

### Aggressive Timeline (Today)
- **Hour 1-2**: Server handler tests → 81.5%
- **Hour 3**: Config edge cases → 82%
- **Hour 4-5**: Doc builder tests → 82.5%
- **Hour 6-7**: Visitor improvements → 85%+

### Conservative Timeline (This Week)
- **Day 1**: Server handlers (3-4 hours) → 82.26%
- **Day 2**: Visitor improvements (4-6 hours) → 85%+

---

## Tools & Commands

### Run Coverage
```bash
npm run test:coverage
```

### Run Specific Test
```bash
cd modules/server && npm test -- configuration.test.ts
```

### Check Current Coverage
```bash
npm run test:coverage 2>&1 | grep "Branches"
```

---

## SUCCESS CRITERIA

✅ **85%+ branch coverage**  
✅ **All tests passing**  
✅ **No decrease in existing coverage**  
✅ **Tests follow Given/When/Then pattern**  
✅ **PR can merge successfully**

---

## BLOCKERS & RISKS

### Risks
1. **Time constraint** - Need 5-7 hours of focused work
2. **Visitor complexity** - May take longer than estimated
3. **Test environment** - Coverage tool artifacts

### Mitigations
1. **Start with handlers** - Fastest, guaranteed ROI
2. **Skip visitor if tight on time** - Can reach 82-83% without it
3. **Document progress** - Show improvement trend

---

## DECISION POINT

**If you have 5-7 hours**: Follow full plan → 85%+  
**If you have 3-4 hours**: Do Phase 1 only → 82%, document remaining work  
**If you have 1-2 hours**: Create handler test shells, document plan

**Current recommendation**: Start with server handler tests RIGHT NOW for immediate impact.
