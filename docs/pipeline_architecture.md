# NyayaLabel AI — Pipeline Architecture & Technical Specification

## 1. Overview

NyayaLabel AI automates packaged commodities inspection for the Department of Legal Metrology. The architecture is engineered around an **offline-first edge model** where critical extraction, validation, and evidence gathering occur directly on the field officer's device, backed by a centralized verification and analytics cloud engine.

---

## 2. The 10-Stage Pipeline

```
[1. Inspector Mobile App]
       │
       ▼
[2. Image Quality AI] ────── (Reject if blurry/skewed) ──► Re-take Prompt
       │ (Passed Quality)
       ▼
[3. CV/OCR/Measurement] ───► Segment PDA & Measure Text Height (mm)
       │
       ▼
[4. Declaration Extraction] ─► Extract 11 Mandatory Legal Fields
       │
       ▼
[5. Versioned Rule Engine] ──► Query Active Statutory Rules (e.g. GSR 202(E))
       │
       ▼
[6. Compliance Engine] ──────► Threshold & Logic Verification
       │
       ▼
[7. PASS / REVIEW / FAIL] ───► Confidence Scoring & Severity Flagging
       │
       ▼
[8. Evidence Engine] ────────► Cryptographic Bounding Boxes & Crop Storage
       │
       ▼
[9. AI Explanation Layer] ───► Plain-Language Legal Citations (Multi-lingual)
       │
       ▼
[10. Report & Dashboard] ───► Offline Signed Report ──► Cloud Sync & GIS Analytics
```

---

## 3. Mandatory Declarations Extracted (Rule 6)

Under Rule 6(1) of the Legal Metrology (Packaged Commodities) Rules, 2011, every package must bear:

1. **Name & Address of Manufacturer / Packer / Importer**
2. **Country of Origin** (for imported commodities)
3. **Common / Generic Name of the Commodity**
4. **Net Quantity** (in standard units of weight, measure, or number)
5. **Month & Year of Manufacture / Packing / Import**
6. **Maximum Retail Price (MRP)** (inclusive of all taxes)
7. **Unit Sale Price (USP)** (where applicable, per g/kg/ml/l/piece)
8. **Expiry / Best Before Date** (for relevant perishable/cosmetic commodities)
9. **Consumer Care Details** (Name, Address, Telephone No., Email)
10. **Sizes / Dimensions** (for garments, sheets, cables, etc.)
11. **Principal Display Area (PDA) Font Height compliance** (table-defined based on area).
