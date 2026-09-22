import { Inspection } from '@nyayalabel/shared';

// AUTO-GENERATED STATIC DEMO DATASET
// Generated from backend seedAnalyticsDemoData.ts logic.
// Do not modify directly.

export const demoInspections: Inspection[] = [
  {
    "id": "insp_147518",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 0",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.59543616555611,
      "longitude": 88.47826579284146,
      "address": "Sadar Bazaar, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-17T05:32:27.906Z",
    "completedAt": "2024-02-17T06:02:27.906Z",
    "syncedAt": "2024-02-17T06:07:27.906Z",
    "createdAt": "2024-02-17T05:32:27.906Z",
    "updatedAt": "2024-02-17T05:32:27.906Z",
    "products": [
      {
        "id": "prod_800943",
        "inspectionId": "insp_147518",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_800943_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-17T05:32:27.906Z",
        "updatedAt": "2024-02-17T05:32:27.906Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_800943_1",
        "inspectionId": "insp_147518",
        "productId": "prod_800943",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-17T05:32:27.906Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_186734",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 1",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.531069782734033,
      "longitude": 88.34130455143037,
      "address": "Local Kirana, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-22T08:39:04.671Z",
    "completedAt": "2024-01-22T09:09:04.671Z",
    "syncedAt": "2024-01-22T09:14:04.671Z",
    "createdAt": "2024-01-22T08:39:04.671Z",
    "updatedAt": "2024-01-22T08:39:04.671Z",
    "products": [
      {
        "id": "prod_527573",
        "inspectionId": "insp_186734",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_527573_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-22T08:39:04.671Z",
        "updatedAt": "2024-01-22T08:39:04.671Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_527573_1",
        "inspectionId": "insp_186734",
        "productId": "prod_527573",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-22T08:39:04.671Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_974794",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 2",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.548380961781724,
      "longitude": 88.36227995502797,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-31T07:41:36.475Z",
    "completedAt": "2024-01-31T08:11:36.475Z",
    "syncedAt": "2024-01-31T08:16:36.475Z",
    "createdAt": "2024-01-31T07:41:36.475Z",
    "updatedAt": "2024-01-31T07:41:36.475Z",
    "products": [
      {
        "id": "prod_561274",
        "inspectionId": "insp_974794",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_561274_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-31T07:41:36.475Z",
        "updatedAt": "2024-01-31T07:41:36.475Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_561274_1",
        "inspectionId": "insp_974794",
        "productId": "prod_561274",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-31T07:41:36.475Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_456350",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 3",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.527507889563292,
      "longitude": 88.3409110276778,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-10T07:50:19.075Z",
    "completedAt": "2024-03-10T08:20:19.075Z",
    "syncedAt": "2024-03-10T08:25:19.075Z",
    "createdAt": "2024-03-10T07:50:19.075Z",
    "updatedAt": "2024-03-10T07:50:19.075Z",
    "products": [
      {
        "id": "prod_887347",
        "inspectionId": "insp_456350",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_887347_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-10T07:50:19.075Z",
        "updatedAt": "2024-03-10T07:50:19.075Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_887347_1",
        "inspectionId": "insp_456350",
        "productId": "prod_887347",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-10T07:50:19.075Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_641212",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 4",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.524304124032945,
      "longitude": 88.36013788022863,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-03T08:34:17.543Z",
    "completedAt": "2024-03-03T09:04:17.543Z",
    "syncedAt": "2024-03-03T09:09:17.543Z",
    "createdAt": "2024-03-03T08:34:17.543Z",
    "updatedAt": "2024-03-03T08:34:17.543Z",
    "products": [
      {
        "id": "prod_480685",
        "inspectionId": "insp_641212",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_480685_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-03T08:34:17.543Z",
        "updatedAt": "2024-03-03T08:34:17.543Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_480685_1",
        "inspectionId": "insp_641212",
        "productId": "prod_480685",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-03T08:34:17.543Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_264863",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 5",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.540101260637897,
      "longitude": 88.33366331557532,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-08T22:00:28.938Z",
    "completedAt": "2024-03-08T22:30:28.938Z",
    "syncedAt": "2024-03-08T22:35:28.938Z",
    "createdAt": "2024-03-08T22:00:28.938Z",
    "updatedAt": "2024-03-08T22:00:28.938Z",
    "products": [
      {
        "id": "prod_507665",
        "inspectionId": "insp_264863",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_507665_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_423920",
              "inspectionId": "insp_264863",
              "productId": "prod_507665",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-08T22:00:28.938Z",
              "updatedAt": "2024-03-08T22:00:28.938Z"
            },
            {
              "id": "viol_261835",
              "inspectionId": "insp_264863",
              "productId": "prod_507665",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-08T22:00:28.938Z",
              "updatedAt": "2024-03-08T22:00:28.938Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-08T22:00:28.938Z",
        "updatedAt": "2024-03-08T22:00:28.938Z"
      }
    ],
    "violations": [
      {
        "id": "viol_423920",
        "inspectionId": "insp_264863",
        "productId": "prod_507665",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-08T22:00:28.938Z",
        "updatedAt": "2024-03-08T22:00:28.938Z"
      },
      {
        "id": "viol_261835",
        "inspectionId": "insp_264863",
        "productId": "prod_507665",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-08T22:00:28.938Z",
        "updatedAt": "2024-03-08T22:00:28.938Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_507665_1",
        "inspectionId": "insp_264863",
        "productId": "prod_507665",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-08T22:00:28.938Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_535233",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 6",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.560473056312222,
      "longitude": 88.34393049373223,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-05T09:31:49.347Z",
    "completedAt": "2024-01-05T10:01:49.347Z",
    "syncedAt": "2024-01-05T10:06:49.347Z",
    "createdAt": "2024-01-05T09:31:49.347Z",
    "updatedAt": "2024-01-05T09:31:49.347Z",
    "products": [
      {
        "id": "prod_846881",
        "inspectionId": "insp_535233",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_846881_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_669577",
              "inspectionId": "insp_535233",
              "productId": "prod_846881",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-05T09:31:49.347Z",
              "updatedAt": "2024-01-05T09:31:49.347Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-05T09:31:49.347Z",
        "updatedAt": "2024-01-05T09:31:49.347Z"
      }
    ],
    "violations": [
      {
        "id": "viol_669577",
        "inspectionId": "insp_535233",
        "productId": "prod_846881",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-05T09:31:49.347Z",
        "updatedAt": "2024-01-05T09:31:49.347Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_846881_1",
        "inspectionId": "insp_535233",
        "productId": "prod_846881",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-05T09:31:49.347Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_603588",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 7",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.54447312210736,
      "longitude": 88.3563268331564,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-26T23:16:09.349Z",
    "completedAt": "2024-02-26T23:46:09.349Z",
    "syncedAt": "2024-02-26T23:51:09.349Z",
    "createdAt": "2024-02-26T23:16:09.349Z",
    "updatedAt": "2024-02-26T23:16:09.349Z",
    "products": [
      {
        "id": "prod_473901",
        "inspectionId": "insp_603588",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_473901_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_204482",
              "inspectionId": "insp_603588",
              "productId": "prod_473901",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-26T23:16:09.349Z",
              "updatedAt": "2024-02-26T23:16:09.349Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-26T23:16:09.349Z",
        "updatedAt": "2024-02-26T23:16:09.349Z"
      }
    ],
    "violations": [
      {
        "id": "viol_204482",
        "inspectionId": "insp_603588",
        "productId": "prod_473901",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-26T23:16:09.349Z",
        "updatedAt": "2024-02-26T23:16:09.349Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_473901_1",
        "inspectionId": "insp_603588",
        "productId": "prod_473901",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-26T23:16:09.349Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_896846",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 8",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.605731798113997,
      "longitude": 88.42940437875363,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-28T06:10:37.874Z",
    "completedAt": "2024-02-28T06:40:37.874Z",
    "syncedAt": "2024-02-28T06:45:37.874Z",
    "createdAt": "2024-02-28T06:10:37.874Z",
    "updatedAt": "2024-02-28T06:10:37.874Z",
    "products": [
      {
        "id": "prod_813587",
        "inspectionId": "insp_896846",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_813587_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-28T06:10:37.874Z",
        "updatedAt": "2024-02-28T06:10:37.874Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_813587_1",
        "inspectionId": "insp_896846",
        "productId": "prod_813587",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-28T06:10:37.874Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_959209",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 9",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.608030300999964,
      "longitude": 88.4188443543252,
      "address": "Wholesale Market, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-07T20:41:42.489Z",
    "completedAt": "2024-02-07T21:11:42.489Z",
    "syncedAt": "2024-02-07T21:16:42.489Z",
    "createdAt": "2024-02-07T20:41:42.489Z",
    "updatedAt": "2024-02-07T20:41:42.489Z",
    "products": [
      {
        "id": "prod_975968",
        "inspectionId": "insp_959209",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_975968_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_062909",
              "inspectionId": "insp_959209",
              "productId": "prod_975968",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-07T20:41:42.489Z",
              "updatedAt": "2024-02-07T20:41:42.489Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-07T20:41:42.489Z",
        "updatedAt": "2024-02-07T20:41:42.489Z"
      }
    ],
    "violations": [
      {
        "id": "viol_062909",
        "inspectionId": "insp_959209",
        "productId": "prod_975968",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-07T20:41:42.489Z",
        "updatedAt": "2024-02-07T20:41:42.489Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_975968_1",
        "inspectionId": "insp_959209",
        "productId": "prod_975968",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-07T20:41:42.489Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_001303",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 10",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.51883245758816,
      "longitude": 88.34038460120672,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-12T01:18:17.637Z",
    "completedAt": "2024-03-12T01:48:17.637Z",
    "syncedAt": "2024-03-12T01:53:17.637Z",
    "createdAt": "2024-03-12T01:18:17.637Z",
    "updatedAt": "2024-03-12T01:18:17.637Z",
    "products": [
      {
        "id": "prod_861449",
        "inspectionId": "insp_001303",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_861449_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_830711",
              "inspectionId": "insp_001303",
              "productId": "prod_861449",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-03-12T01:18:17.637Z",
              "updatedAt": "2024-03-12T01:18:17.637Z"
            },
            {
              "id": "viol_611459",
              "inspectionId": "insp_001303",
              "productId": "prod_861449",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-03-12T01:18:17.637Z",
              "updatedAt": "2024-03-12T01:18:17.637Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-12T01:18:17.637Z",
        "updatedAt": "2024-03-12T01:18:17.637Z"
      }
    ],
    "violations": [
      {
        "id": "viol_830711",
        "inspectionId": "insp_001303",
        "productId": "prod_861449",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-03-12T01:18:17.637Z",
        "updatedAt": "2024-03-12T01:18:17.637Z"
      },
      {
        "id": "viol_611459",
        "inspectionId": "insp_001303",
        "productId": "prod_861449",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-03-12T01:18:17.637Z",
        "updatedAt": "2024-03-12T01:18:17.637Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_861449_1",
        "inspectionId": "insp_001303",
        "productId": "prod_861449",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-12T01:18:17.637Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_410420",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 11",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.543012799232596,
      "longitude": 88.35388236584826,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-18T02:53:39.240Z",
    "completedAt": "2024-01-18T03:23:39.240Z",
    "syncedAt": "2024-01-18T03:28:39.240Z",
    "createdAt": "2024-01-18T02:53:39.240Z",
    "updatedAt": "2024-01-18T02:53:39.240Z",
    "products": [
      {
        "id": "prod_319523",
        "inspectionId": "insp_410420",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_319523_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-18T02:53:39.240Z",
        "updatedAt": "2024-01-18T02:53:39.240Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_319523_1",
        "inspectionId": "insp_410420",
        "productId": "prod_319523",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-18T02:53:39.240Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_939257",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 12",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.560037849682786,
      "longitude": 88.36249917391225,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-18T17:16:47.673Z",
    "createdAt": "2024-01-18T17:16:47.673Z",
    "updatedAt": "2024-01-18T17:16:47.673Z",
    "products": [
      {
        "id": "prod_639004",
        "inspectionId": "insp_939257",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_639004_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-18T17:16:47.673Z",
        "updatedAt": "2024-01-18T17:16:47.673Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_639004_1",
        "inspectionId": "insp_939257",
        "productId": "prod_639004",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-18T17:16:47.673Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_110637",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 13",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.595402573535583,
      "longitude": 88.43577098584414,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-01T03:21:32.153Z",
    "createdAt": "2024-02-01T03:21:32.153Z",
    "updatedAt": "2024-02-01T03:21:32.153Z",
    "products": [
      {
        "id": "prod_695493",
        "inspectionId": "insp_110637",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_695493_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_068298",
              "inspectionId": "insp_110637",
              "productId": "prod_695493",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-01T03:21:32.153Z",
              "updatedAt": "2024-02-01T03:21:32.153Z"
            },
            {
              "id": "viol_433834",
              "inspectionId": "insp_110637",
              "productId": "prod_695493",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-01T03:21:32.153Z",
              "updatedAt": "2024-02-01T03:21:32.153Z"
            },
            {
              "id": "viol_679378",
              "inspectionId": "insp_110637",
              "productId": "prod_695493",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-01T03:21:32.153Z",
              "updatedAt": "2024-02-01T03:21:32.153Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-01T03:21:32.153Z",
        "updatedAt": "2024-02-01T03:21:32.153Z"
      }
    ],
    "violations": [
      {
        "id": "viol_068298",
        "inspectionId": "insp_110637",
        "productId": "prod_695493",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-01T03:21:32.153Z",
        "updatedAt": "2024-02-01T03:21:32.153Z"
      },
      {
        "id": "viol_433834",
        "inspectionId": "insp_110637",
        "productId": "prod_695493",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-01T03:21:32.153Z",
        "updatedAt": "2024-02-01T03:21:32.153Z"
      },
      {
        "id": "viol_679378",
        "inspectionId": "insp_110637",
        "productId": "prod_695493",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-01T03:21:32.153Z",
        "updatedAt": "2024-02-01T03:21:32.153Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_695493_1",
        "inspectionId": "insp_110637",
        "productId": "prod_695493",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-01T03:21:32.153Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_571314",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 14",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.535556028475852,
      "longitude": 88.38212185663522,
      "address": "Wholesale Market, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-09T10:09:35.691Z",
    "createdAt": "2024-03-09T10:09:35.691Z",
    "updatedAt": "2024-03-09T10:09:35.691Z",
    "products": [
      {
        "id": "prod_841893",
        "inspectionId": "insp_571314",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_841893_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_602237",
              "inspectionId": "insp_571314",
              "productId": "prod_841893",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-03-09T10:09:35.691Z",
              "updatedAt": "2024-03-09T10:09:35.691Z"
            },
            {
              "id": "viol_024076",
              "inspectionId": "insp_571314",
              "productId": "prod_841893",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-03-09T10:09:35.691Z",
              "updatedAt": "2024-03-09T10:09:35.691Z"
            },
            {
              "id": "viol_500944",
              "inspectionId": "insp_571314",
              "productId": "prod_841893",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-03-09T10:09:35.691Z",
              "updatedAt": "2024-03-09T10:09:35.691Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-09T10:09:35.691Z",
        "updatedAt": "2024-03-09T10:09:35.691Z"
      }
    ],
    "violations": [
      {
        "id": "viol_602237",
        "inspectionId": "insp_571314",
        "productId": "prod_841893",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-03-09T10:09:35.691Z",
        "updatedAt": "2024-03-09T10:09:35.691Z"
      },
      {
        "id": "viol_024076",
        "inspectionId": "insp_571314",
        "productId": "prod_841893",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-03-09T10:09:35.691Z",
        "updatedAt": "2024-03-09T10:09:35.691Z"
      },
      {
        "id": "viol_500944",
        "inspectionId": "insp_571314",
        "productId": "prod_841893",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-03-09T10:09:35.691Z",
        "updatedAt": "2024-03-09T10:09:35.691Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_841893_1",
        "inspectionId": "insp_571314",
        "productId": "prod_841893",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-09T10:09:35.691Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_592781",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 15",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.5861003905416,
      "longitude": 88.37225156445673,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-26T20:39:19.314Z",
    "createdAt": "2024-01-26T20:39:19.314Z",
    "updatedAt": "2024-01-26T20:39:19.314Z",
    "products": [
      {
        "id": "prod_115013",
        "inspectionId": "insp_592781",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_115013_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-26T20:39:19.314Z",
        "updatedAt": "2024-01-26T20:39:19.314Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_115013_1",
        "inspectionId": "insp_592781",
        "productId": "prod_115013",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-26T20:39:19.314Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_553419",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 16",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.554238006685388,
      "longitude": 88.4747627234466,
      "address": "Sadar Bazaar, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2023-12-29T14:13:14.038Z",
    "completedAt": "2023-12-29T14:43:14.038Z",
    "syncedAt": "2023-12-29T14:48:14.038Z",
    "createdAt": "2023-12-29T14:13:14.038Z",
    "updatedAt": "2023-12-29T14:13:14.038Z",
    "products": [
      {
        "id": "prod_178198",
        "inspectionId": "insp_553419",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_178198_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-29T14:13:14.038Z",
        "updatedAt": "2023-12-29T14:13:14.038Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_178198_1",
        "inspectionId": "insp_553419",
        "productId": "prod_178198",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-29T14:13:14.038Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_413186",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 17",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.57845973973635,
      "longitude": 88.46249849642571,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-05T11:18:53.019Z",
    "completedAt": "2024-03-05T11:48:53.019Z",
    "syncedAt": "2024-03-05T11:53:53.019Z",
    "createdAt": "2024-03-05T11:18:53.019Z",
    "updatedAt": "2024-03-05T11:18:53.019Z",
    "products": [
      {
        "id": "prod_335132",
        "inspectionId": "insp_413186",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_335132_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-05T11:18:53.019Z",
        "updatedAt": "2024-03-05T11:18:53.019Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_335132_1",
        "inspectionId": "insp_413186",
        "productId": "prod_335132",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-05T11:18:53.019Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_804568",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 18",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.502573325854094,
      "longitude": 88.37972958883327,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-25T12:18:53.702Z",
    "createdAt": "2024-01-25T12:18:53.702Z",
    "updatedAt": "2024-01-25T12:18:53.702Z",
    "products": [
      {
        "id": "prod_829790",
        "inspectionId": "insp_804568",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_829790_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_403804",
              "inspectionId": "insp_804568",
              "productId": "prod_829790",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-25T12:18:53.702Z",
              "updatedAt": "2024-01-25T12:18:53.702Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-25T12:18:53.702Z",
        "updatedAt": "2024-01-25T12:18:53.702Z"
      }
    ],
    "violations": [
      {
        "id": "viol_403804",
        "inspectionId": "insp_804568",
        "productId": "prod_829790",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-25T12:18:53.702Z",
        "updatedAt": "2024-01-25T12:18:53.702Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_829790_1",
        "inspectionId": "insp_804568",
        "productId": "prod_829790",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-25T12:18:53.702Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_687128",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 19",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.509799416630116,
      "longitude": 88.36028064753057,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-04T07:00:42.120Z",
    "completedAt": "2024-02-04T07:30:42.120Z",
    "syncedAt": "2024-02-04T07:35:42.120Z",
    "createdAt": "2024-02-04T07:00:42.120Z",
    "updatedAt": "2024-02-04T07:00:42.120Z",
    "products": [
      {
        "id": "prod_295639",
        "inspectionId": "insp_687128",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_295639_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-04T07:00:42.120Z",
        "updatedAt": "2024-02-04T07:00:42.120Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_295639_1",
        "inspectionId": "insp_687128",
        "productId": "prod_295639",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-04T07:00:42.120Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_801251",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 20",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.572831820906178,
      "longitude": 88.43827515616626,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-19T05:35:41.355Z",
    "completedAt": "2024-03-19T06:05:41.355Z",
    "syncedAt": "2024-03-19T06:10:41.355Z",
    "createdAt": "2024-03-19T05:35:41.355Z",
    "updatedAt": "2024-03-19T05:35:41.355Z",
    "products": [
      {
        "id": "prod_759596",
        "inspectionId": "insp_801251",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_759596_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-19T05:35:41.355Z",
        "updatedAt": "2024-03-19T05:35:41.355Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_759596_1",
        "inspectionId": "insp_801251",
        "productId": "prod_759596",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-19T05:35:41.355Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_549765",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 21",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.55166950001175,
      "longitude": 88.32975342405113,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-04T13:50:17.365Z",
    "completedAt": "2024-01-04T14:20:17.365Z",
    "syncedAt": "2024-01-04T14:25:17.365Z",
    "createdAt": "2024-01-04T13:50:17.365Z",
    "updatedAt": "2024-01-04T13:50:17.365Z",
    "products": [
      {
        "id": "prod_106869",
        "inspectionId": "insp_549765",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_106869_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_193270",
              "inspectionId": "insp_549765",
              "productId": "prod_106869",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-04T13:50:17.365Z",
              "updatedAt": "2024-01-04T13:50:17.365Z"
            },
            {
              "id": "viol_593786",
              "inspectionId": "insp_549765",
              "productId": "prod_106869",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-04T13:50:17.365Z",
              "updatedAt": "2024-01-04T13:50:17.365Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-04T13:50:17.365Z",
        "updatedAt": "2024-01-04T13:50:17.365Z"
      }
    ],
    "violations": [
      {
        "id": "viol_193270",
        "inspectionId": "insp_549765",
        "productId": "prod_106869",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-04T13:50:17.365Z",
        "updatedAt": "2024-01-04T13:50:17.365Z"
      },
      {
        "id": "viol_593786",
        "inspectionId": "insp_549765",
        "productId": "prod_106869",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-04T13:50:17.365Z",
        "updatedAt": "2024-01-04T13:50:17.365Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_106869_1",
        "inspectionId": "insp_549765",
        "productId": "prod_106869",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-04T13:50:17.365Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_022373",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 22",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.565609390160574,
      "longitude": 88.34365155347642,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-07T18:52:42.312Z",
    "completedAt": "2024-01-07T19:22:42.312Z",
    "syncedAt": "2024-01-07T19:27:42.312Z",
    "createdAt": "2024-01-07T18:52:42.312Z",
    "updatedAt": "2024-01-07T18:52:42.312Z",
    "products": [
      {
        "id": "prod_290755",
        "inspectionId": "insp_022373",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_290755_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_842801",
              "inspectionId": "insp_022373",
              "productId": "prod_290755",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-07T18:52:42.312Z",
              "updatedAt": "2024-01-07T18:52:42.312Z"
            },
            {
              "id": "viol_298185",
              "inspectionId": "insp_022373",
              "productId": "prod_290755",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-07T18:52:42.312Z",
              "updatedAt": "2024-01-07T18:52:42.312Z"
            },
            {
              "id": "viol_727927",
              "inspectionId": "insp_022373",
              "productId": "prod_290755",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-07T18:52:42.312Z",
              "updatedAt": "2024-01-07T18:52:42.312Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-07T18:52:42.312Z",
        "updatedAt": "2024-01-07T18:52:42.312Z"
      }
    ],
    "violations": [
      {
        "id": "viol_842801",
        "inspectionId": "insp_022373",
        "productId": "prod_290755",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-07T18:52:42.312Z",
        "updatedAt": "2024-01-07T18:52:42.312Z"
      },
      {
        "id": "viol_298185",
        "inspectionId": "insp_022373",
        "productId": "prod_290755",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-07T18:52:42.312Z",
        "updatedAt": "2024-01-07T18:52:42.312Z"
      },
      {
        "id": "viol_727927",
        "inspectionId": "insp_022373",
        "productId": "prod_290755",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-07T18:52:42.312Z",
        "updatedAt": "2024-01-07T18:52:42.312Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_290755_1",
        "inspectionId": "insp_022373",
        "productId": "prod_290755",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-07T18:52:42.312Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_278536",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 23",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.599987785510105,
      "longitude": 88.47205456768583,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-21T06:14:44.565Z",
    "completedAt": "2024-01-21T06:44:44.565Z",
    "syncedAt": "2024-01-21T06:49:44.565Z",
    "createdAt": "2024-01-21T06:14:44.565Z",
    "updatedAt": "2024-01-21T06:14:44.565Z",
    "products": [
      {
        "id": "prod_330401",
        "inspectionId": "insp_278536",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_330401_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_588205",
              "inspectionId": "insp_278536",
              "productId": "prod_330401",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-21T06:14:44.565Z",
              "updatedAt": "2024-01-21T06:14:44.565Z"
            },
            {
              "id": "viol_185017",
              "inspectionId": "insp_278536",
              "productId": "prod_330401",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-21T06:14:44.565Z",
              "updatedAt": "2024-01-21T06:14:44.565Z"
            },
            {
              "id": "viol_397270",
              "inspectionId": "insp_278536",
              "productId": "prod_330401",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-21T06:14:44.565Z",
              "updatedAt": "2024-01-21T06:14:44.565Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-21T06:14:44.565Z",
        "updatedAt": "2024-01-21T06:14:44.565Z"
      }
    ],
    "violations": [
      {
        "id": "viol_588205",
        "inspectionId": "insp_278536",
        "productId": "prod_330401",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-21T06:14:44.565Z",
        "updatedAt": "2024-01-21T06:14:44.565Z"
      },
      {
        "id": "viol_185017",
        "inspectionId": "insp_278536",
        "productId": "prod_330401",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-21T06:14:44.565Z",
        "updatedAt": "2024-01-21T06:14:44.565Z"
      },
      {
        "id": "viol_397270",
        "inspectionId": "insp_278536",
        "productId": "prod_330401",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-21T06:14:44.565Z",
        "updatedAt": "2024-01-21T06:14:44.565Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_330401_1",
        "inspectionId": "insp_278536",
        "productId": "prod_330401",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-21T06:14:44.565Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_231752",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 24",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.57100932543763,
      "longitude": 88.42935611980351,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-20T05:32:55.840Z",
    "completedAt": "2024-02-20T06:02:55.840Z",
    "syncedAt": "2024-02-20T06:07:55.840Z",
    "createdAt": "2024-02-20T05:32:55.840Z",
    "updatedAt": "2024-02-20T05:32:55.840Z",
    "products": [
      {
        "id": "prod_046876",
        "inspectionId": "insp_231752",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_046876_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-20T05:32:55.840Z",
        "updatedAt": "2024-02-20T05:32:55.840Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_046876_1",
        "inspectionId": "insp_231752",
        "productId": "prod_046876",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-20T05:32:55.840Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_834119",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 25",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.5094097290383,
      "longitude": 88.35050490078251,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2023-12-27T23:09:08.931Z",
    "completedAt": "2023-12-27T23:39:08.931Z",
    "syncedAt": "2023-12-27T23:44:08.931Z",
    "createdAt": "2023-12-27T23:09:08.931Z",
    "updatedAt": "2023-12-27T23:09:08.931Z",
    "products": [
      {
        "id": "prod_820489",
        "inspectionId": "insp_834119",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_820489_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_278316",
              "inspectionId": "insp_834119",
              "productId": "prod_820489",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2023-12-27T23:09:08.931Z",
              "updatedAt": "2023-12-27T23:09:08.931Z"
            },
            {
              "id": "viol_265912",
              "inspectionId": "insp_834119",
              "productId": "prod_820489",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2023-12-27T23:09:08.931Z",
              "updatedAt": "2023-12-27T23:09:08.931Z"
            },
            {
              "id": "viol_895706",
              "inspectionId": "insp_834119",
              "productId": "prod_820489",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-27T23:09:08.931Z",
              "updatedAt": "2023-12-27T23:09:08.931Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-27T23:09:08.931Z",
        "updatedAt": "2023-12-27T23:09:08.931Z"
      }
    ],
    "violations": [
      {
        "id": "viol_278316",
        "inspectionId": "insp_834119",
        "productId": "prod_820489",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2023-12-27T23:09:08.931Z",
        "updatedAt": "2023-12-27T23:09:08.931Z"
      },
      {
        "id": "viol_265912",
        "inspectionId": "insp_834119",
        "productId": "prod_820489",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2023-12-27T23:09:08.931Z",
        "updatedAt": "2023-12-27T23:09:08.931Z"
      },
      {
        "id": "viol_895706",
        "inspectionId": "insp_834119",
        "productId": "prod_820489",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-27T23:09:08.931Z",
        "updatedAt": "2023-12-27T23:09:08.931Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_820489_1",
        "inspectionId": "insp_834119",
        "productId": "prod_820489",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-27T23:09:08.931Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_998887",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 26",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.529046763571554,
      "longitude": 88.36823282637855,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-24T03:16:09.182Z",
    "completedAt": "2024-03-24T03:46:09.182Z",
    "syncedAt": "2024-03-24T03:51:09.182Z",
    "createdAt": "2024-03-24T03:16:09.182Z",
    "updatedAt": "2024-03-24T03:16:09.182Z",
    "products": [
      {
        "id": "prod_370949",
        "inspectionId": "insp_998887",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_370949_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_211248",
              "inspectionId": "insp_998887",
              "productId": "prod_370949",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-24T03:16:09.182Z",
              "updatedAt": "2024-03-24T03:16:09.182Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-24T03:16:09.182Z",
        "updatedAt": "2024-03-24T03:16:09.182Z"
      }
    ],
    "violations": [
      {
        "id": "viol_211248",
        "inspectionId": "insp_998887",
        "productId": "prod_370949",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-24T03:16:09.182Z",
        "updatedAt": "2024-03-24T03:16:09.182Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_370949_1",
        "inspectionId": "insp_998887",
        "productId": "prod_370949",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-24T03:16:09.182Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_995649",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 27",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.579628880300152,
      "longitude": 88.4243183378236,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-05T08:16:28.404Z",
    "completedAt": "2024-02-05T08:46:28.404Z",
    "syncedAt": "2024-02-05T08:51:28.404Z",
    "createdAt": "2024-02-05T08:16:28.404Z",
    "updatedAt": "2024-02-05T08:16:28.404Z",
    "products": [
      {
        "id": "prod_916643",
        "inspectionId": "insp_995649",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_916643_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-05T08:16:28.404Z",
        "updatedAt": "2024-02-05T08:16:28.404Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_916643_1",
        "inspectionId": "insp_995649",
        "productId": "prod_916643",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-05T08:16:28.404Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_694618",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 28",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.517368063386524,
      "longitude": 88.3529217420655,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-18T05:57:50.224Z",
    "completedAt": "2024-03-18T06:27:50.224Z",
    "syncedAt": "2024-03-18T06:32:50.224Z",
    "createdAt": "2024-03-18T05:57:50.224Z",
    "updatedAt": "2024-03-18T05:57:50.224Z",
    "products": [
      {
        "id": "prod_509476",
        "inspectionId": "insp_694618",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_509476_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-18T05:57:50.224Z",
        "updatedAt": "2024-03-18T05:57:50.224Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_509476_1",
        "inspectionId": "insp_694618",
        "productId": "prod_509476",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-18T05:57:50.224Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_394550",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 29",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.540213985574283,
      "longitude": 88.33951179464631,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-12T10:14:00.791Z",
    "completedAt": "2024-02-12T10:44:00.791Z",
    "syncedAt": "2024-02-12T10:49:00.791Z",
    "createdAt": "2024-02-12T10:14:00.791Z",
    "updatedAt": "2024-02-12T10:14:00.791Z",
    "products": [
      {
        "id": "prod_067889",
        "inspectionId": "insp_394550",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_067889_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_922663",
              "inspectionId": "insp_394550",
              "productId": "prod_067889",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-12T10:14:00.791Z",
              "updatedAt": "2024-02-12T10:14:00.791Z"
            },
            {
              "id": "viol_609372",
              "inspectionId": "insp_394550",
              "productId": "prod_067889",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-12T10:14:00.791Z",
              "updatedAt": "2024-02-12T10:14:00.791Z"
            },
            {
              "id": "viol_114194",
              "inspectionId": "insp_394550",
              "productId": "prod_067889",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-12T10:14:00.791Z",
              "updatedAt": "2024-02-12T10:14:00.791Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-12T10:14:00.791Z",
        "updatedAt": "2024-02-12T10:14:00.791Z"
      }
    ],
    "violations": [
      {
        "id": "viol_922663",
        "inspectionId": "insp_394550",
        "productId": "prod_067889",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-12T10:14:00.791Z",
        "updatedAt": "2024-02-12T10:14:00.791Z"
      },
      {
        "id": "viol_609372",
        "inspectionId": "insp_394550",
        "productId": "prod_067889",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-12T10:14:00.791Z",
        "updatedAt": "2024-02-12T10:14:00.791Z"
      },
      {
        "id": "viol_114194",
        "inspectionId": "insp_394550",
        "productId": "prod_067889",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-12T10:14:00.791Z",
        "updatedAt": "2024-02-12T10:14:00.791Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_067889_1",
        "inspectionId": "insp_394550",
        "productId": "prod_067889",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-12T10:14:00.791Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_499544",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 30",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.572697300130052,
      "longitude": 88.42080159668926,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-18T03:00:48.663Z",
    "completedAt": "2024-03-18T03:30:48.663Z",
    "syncedAt": "2024-03-18T03:35:48.663Z",
    "createdAt": "2024-03-18T03:00:48.663Z",
    "updatedAt": "2024-03-18T03:00:48.663Z",
    "products": [
      {
        "id": "prod_873817",
        "inspectionId": "insp_499544",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_873817_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_614639",
              "inspectionId": "insp_499544",
              "productId": "prod_873817",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-03-18T03:00:48.663Z",
              "updatedAt": "2024-03-18T03:00:48.663Z"
            },
            {
              "id": "viol_457112",
              "inspectionId": "insp_499544",
              "productId": "prod_873817",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-18T03:00:48.663Z",
              "updatedAt": "2024-03-18T03:00:48.663Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-18T03:00:48.663Z",
        "updatedAt": "2024-03-18T03:00:48.663Z"
      }
    ],
    "violations": [
      {
        "id": "viol_614639",
        "inspectionId": "insp_499544",
        "productId": "prod_873817",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-03-18T03:00:48.663Z",
        "updatedAt": "2024-03-18T03:00:48.663Z"
      },
      {
        "id": "viol_457112",
        "inspectionId": "insp_499544",
        "productId": "prod_873817",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-18T03:00:48.663Z",
        "updatedAt": "2024-03-18T03:00:48.663Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_873817_1",
        "inspectionId": "insp_499544",
        "productId": "prod_873817",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-18T03:00:48.663Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_768206",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 31",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.59839140066442,
      "longitude": 88.4553656519305,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-14T13:28:19.689Z",
    "completedAt": "2024-01-14T13:58:19.689Z",
    "syncedAt": "2024-01-14T14:03:19.689Z",
    "createdAt": "2024-01-14T13:28:19.689Z",
    "updatedAt": "2024-01-14T13:28:19.689Z",
    "products": [
      {
        "id": "prod_995569",
        "inspectionId": "insp_768206",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_995569_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-14T13:28:19.689Z",
        "updatedAt": "2024-01-14T13:28:19.689Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_995569_1",
        "inspectionId": "insp_768206",
        "productId": "prod_995569",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-14T13:28:19.689Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_220027",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 32",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.540961596570234,
      "longitude": 88.3306098930659,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-10T07:23:45.457Z",
    "completedAt": "2024-02-10T07:53:45.457Z",
    "syncedAt": "2024-02-10T07:58:45.457Z",
    "createdAt": "2024-02-10T07:23:45.457Z",
    "updatedAt": "2024-02-10T07:23:45.457Z",
    "products": [
      {
        "id": "prod_820665",
        "inspectionId": "insp_220027",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_820665_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-10T07:23:45.457Z",
        "updatedAt": "2024-02-10T07:23:45.457Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_820665_1",
        "inspectionId": "insp_220027",
        "productId": "prod_820665",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-10T07:23:45.457Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_320043",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 33",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.553569226618034,
      "longitude": 88.45518012217507,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-28T09:09:25.662Z",
    "completedAt": "2024-01-28T09:39:25.662Z",
    "syncedAt": "2024-01-28T09:44:25.662Z",
    "createdAt": "2024-01-28T09:09:25.662Z",
    "updatedAt": "2024-01-28T09:09:25.662Z",
    "products": [
      {
        "id": "prod_589358",
        "inspectionId": "insp_320043",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_589358_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_115267",
              "inspectionId": "insp_320043",
              "productId": "prod_589358",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-28T09:09:25.662Z",
              "updatedAt": "2024-01-28T09:09:25.662Z"
            },
            {
              "id": "viol_738040",
              "inspectionId": "insp_320043",
              "productId": "prod_589358",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-28T09:09:25.662Z",
              "updatedAt": "2024-01-28T09:09:25.662Z"
            },
            {
              "id": "viol_092886",
              "inspectionId": "insp_320043",
              "productId": "prod_589358",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-28T09:09:25.662Z",
              "updatedAt": "2024-01-28T09:09:25.662Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-28T09:09:25.662Z",
        "updatedAt": "2024-01-28T09:09:25.662Z"
      }
    ],
    "violations": [
      {
        "id": "viol_115267",
        "inspectionId": "insp_320043",
        "productId": "prod_589358",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-28T09:09:25.662Z",
        "updatedAt": "2024-01-28T09:09:25.662Z"
      },
      {
        "id": "viol_738040",
        "inspectionId": "insp_320043",
        "productId": "prod_589358",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-28T09:09:25.662Z",
        "updatedAt": "2024-01-28T09:09:25.662Z"
      },
      {
        "id": "viol_092886",
        "inspectionId": "insp_320043",
        "productId": "prod_589358",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-28T09:09:25.662Z",
        "updatedAt": "2024-01-28T09:09:25.662Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_589358_1",
        "inspectionId": "insp_320043",
        "productId": "prod_589358",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-28T09:09:25.662Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_400572",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 34",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.593454866369576,
      "longitude": 88.39968484747965,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-24T09:25:30.314Z",
    "completedAt": "2024-01-24T09:55:30.314Z",
    "syncedAt": "2024-01-24T10:00:30.314Z",
    "createdAt": "2024-01-24T09:25:30.314Z",
    "updatedAt": "2024-01-24T09:25:30.314Z",
    "products": [
      {
        "id": "prod_402725",
        "inspectionId": "insp_400572",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_402725_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-24T09:25:30.314Z",
        "updatedAt": "2024-01-24T09:25:30.314Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_402725_1",
        "inspectionId": "insp_400572",
        "productId": "prod_402725",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-24T09:25:30.314Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_954165",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 35",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.5290400009901,
      "longitude": 88.35670295148431,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-29T00:37:02.563Z",
    "completedAt": "2024-01-29T01:07:02.563Z",
    "syncedAt": "2024-01-29T01:12:02.563Z",
    "createdAt": "2024-01-29T00:37:02.563Z",
    "updatedAt": "2024-01-29T00:37:02.563Z",
    "products": [
      {
        "id": "prod_680842",
        "inspectionId": "insp_954165",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_680842_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-29T00:37:02.563Z",
        "updatedAt": "2024-01-29T00:37:02.563Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_680842_1",
        "inspectionId": "insp_954165",
        "productId": "prod_680842",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-29T00:37:02.563Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_870582",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 36",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58621425669789,
      "longitude": 88.46634455130196,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-28T23:22:59.496Z",
    "completedAt": "2024-01-28T23:52:59.496Z",
    "syncedAt": "2024-01-28T23:57:59.496Z",
    "createdAt": "2024-01-28T23:22:59.496Z",
    "updatedAt": "2024-01-28T23:22:59.496Z",
    "products": [
      {
        "id": "prod_331139",
        "inspectionId": "insp_870582",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_331139_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_126753",
              "inspectionId": "insp_870582",
              "productId": "prod_331139",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-28T23:22:59.496Z",
              "updatedAt": "2024-01-28T23:22:59.496Z"
            },
            {
              "id": "viol_051589",
              "inspectionId": "insp_870582",
              "productId": "prod_331139",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-28T23:22:59.496Z",
              "updatedAt": "2024-01-28T23:22:59.496Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-28T23:22:59.496Z",
        "updatedAt": "2024-01-28T23:22:59.496Z"
      }
    ],
    "violations": [
      {
        "id": "viol_126753",
        "inspectionId": "insp_870582",
        "productId": "prod_331139",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-28T23:22:59.496Z",
        "updatedAt": "2024-01-28T23:22:59.496Z"
      },
      {
        "id": "viol_051589",
        "inspectionId": "insp_870582",
        "productId": "prod_331139",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-28T23:22:59.496Z",
        "updatedAt": "2024-01-28T23:22:59.496Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_331139_1",
        "inspectionId": "insp_870582",
        "productId": "prod_331139",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-28T23:22:59.496Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_001281",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 37",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58353180921891,
      "longitude": 88.45195076774698,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-04T22:39:56.576Z",
    "completedAt": "2024-03-04T23:09:56.576Z",
    "syncedAt": "2024-03-04T23:14:56.576Z",
    "createdAt": "2024-03-04T22:39:56.576Z",
    "updatedAt": "2024-03-04T22:39:56.576Z",
    "products": [
      {
        "id": "prod_049803",
        "inspectionId": "insp_001281",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_049803_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_749820",
              "inspectionId": "insp_001281",
              "productId": "prod_049803",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-03-04T22:39:56.576Z",
              "updatedAt": "2024-03-04T22:39:56.576Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-04T22:39:56.576Z",
        "updatedAt": "2024-03-04T22:39:56.576Z"
      }
    ],
    "violations": [
      {
        "id": "viol_749820",
        "inspectionId": "insp_001281",
        "productId": "prod_049803",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-03-04T22:39:56.576Z",
        "updatedAt": "2024-03-04T22:39:56.576Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_049803_1",
        "inspectionId": "insp_001281",
        "productId": "prod_049803",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-04T22:39:56.576Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_021136",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 38",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.598496639326644,
      "longitude": 88.41853830014902,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-19T04:41:46.994Z",
    "completedAt": "2024-02-19T05:11:46.994Z",
    "syncedAt": "2024-02-19T05:16:46.994Z",
    "createdAt": "2024-02-19T04:41:46.994Z",
    "updatedAt": "2024-02-19T04:41:46.994Z",
    "products": [
      {
        "id": "prod_063607",
        "inspectionId": "insp_021136",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_063607_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_605117",
              "inspectionId": "insp_021136",
              "productId": "prod_063607",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-19T04:41:46.994Z",
              "updatedAt": "2024-02-19T04:41:46.994Z"
            },
            {
              "id": "viol_271154",
              "inspectionId": "insp_021136",
              "productId": "prod_063607",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-19T04:41:46.994Z",
              "updatedAt": "2024-02-19T04:41:46.994Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-19T04:41:46.994Z",
        "updatedAt": "2024-02-19T04:41:46.994Z"
      }
    ],
    "violations": [
      {
        "id": "viol_605117",
        "inspectionId": "insp_021136",
        "productId": "prod_063607",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-19T04:41:46.994Z",
        "updatedAt": "2024-02-19T04:41:46.994Z"
      },
      {
        "id": "viol_271154",
        "inspectionId": "insp_021136",
        "productId": "prod_063607",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-19T04:41:46.994Z",
        "updatedAt": "2024-02-19T04:41:46.994Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_063607_1",
        "inspectionId": "insp_021136",
        "productId": "prod_063607",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-19T04:41:46.994Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_730144",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 39",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.573132299921873,
      "longitude": 88.42619403234984,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-31T04:29:11.079Z",
    "completedAt": "2024-01-31T04:59:11.079Z",
    "syncedAt": "2024-01-31T05:04:11.079Z",
    "createdAt": "2024-01-31T04:29:11.079Z",
    "updatedAt": "2024-01-31T04:29:11.079Z",
    "products": [
      {
        "id": "prod_921747",
        "inspectionId": "insp_730144",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_921747_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-31T04:29:11.079Z",
        "updatedAt": "2024-01-31T04:29:11.079Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_921747_1",
        "inspectionId": "insp_730144",
        "productId": "prod_921747",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-31T04:29:11.079Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_873190",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 40",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.583144927922945,
      "longitude": 88.45886078191732,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-03T11:32:03.031Z",
    "createdAt": "2024-01-03T11:32:03.031Z",
    "updatedAt": "2024-01-03T11:32:03.031Z",
    "products": [
      {
        "id": "prod_270927",
        "inspectionId": "insp_873190",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_270927_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-03T11:32:03.031Z",
        "updatedAt": "2024-01-03T11:32:03.031Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_270927_1",
        "inspectionId": "insp_873190",
        "productId": "prod_270927",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-03T11:32:03.031Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_271664",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 41",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.5430302170655,
      "longitude": 88.34907908083939,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-24T02:01:02.347Z",
    "completedAt": "2024-02-24T02:31:02.347Z",
    "syncedAt": "2024-02-24T02:36:02.347Z",
    "createdAt": "2024-02-24T02:01:02.347Z",
    "updatedAt": "2024-02-24T02:01:02.347Z",
    "products": [
      {
        "id": "prod_885724",
        "inspectionId": "insp_271664",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_885724_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-24T02:01:02.347Z",
        "updatedAt": "2024-02-24T02:01:02.347Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_885724_1",
        "inspectionId": "insp_271664",
        "productId": "prod_885724",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-24T02:01:02.347Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_579770",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 42",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.581750896417727,
      "longitude": 88.42505880247268,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-07T15:50:39.024Z",
    "createdAt": "2024-01-07T15:50:39.024Z",
    "updatedAt": "2024-01-07T15:50:39.024Z",
    "products": [
      {
        "id": "prod_557709",
        "inspectionId": "insp_579770",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_557709_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-07T15:50:39.024Z",
        "updatedAt": "2024-01-07T15:50:39.024Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_557709_1",
        "inspectionId": "insp_579770",
        "productId": "prod_557709",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-07T15:50:39.024Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_844795",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 43",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.593323376330865,
      "longitude": 88.39530044007536,
      "address": "Wholesale Market, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-08T17:49:00.254Z",
    "createdAt": "2024-03-08T17:49:00.254Z",
    "updatedAt": "2024-03-08T17:49:00.254Z",
    "products": [
      {
        "id": "prod_610303",
        "inspectionId": "insp_844795",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_610303_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-08T17:49:00.254Z",
        "updatedAt": "2024-03-08T17:49:00.254Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_610303_1",
        "inspectionId": "insp_844795",
        "productId": "prod_610303",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-08T17:49:00.254Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_456241",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 44",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.571046295737954,
      "longitude": 88.3491869419913,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-03T03:49:48.128Z",
    "completedAt": "2024-01-03T04:19:48.128Z",
    "syncedAt": "2024-01-03T04:24:48.128Z",
    "createdAt": "2024-01-03T03:49:48.128Z",
    "updatedAt": "2024-01-03T03:49:48.128Z",
    "products": [
      {
        "id": "prod_032835",
        "inspectionId": "insp_456241",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_032835_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_798433",
              "inspectionId": "insp_456241",
              "productId": "prod_032835",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-03T03:49:48.128Z",
              "updatedAt": "2024-01-03T03:49:48.128Z"
            },
            {
              "id": "viol_377914",
              "inspectionId": "insp_456241",
              "productId": "prod_032835",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-03T03:49:48.128Z",
              "updatedAt": "2024-01-03T03:49:48.128Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-03T03:49:48.128Z",
        "updatedAt": "2024-01-03T03:49:48.128Z"
      }
    ],
    "violations": [
      {
        "id": "viol_798433",
        "inspectionId": "insp_456241",
        "productId": "prod_032835",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-03T03:49:48.128Z",
        "updatedAt": "2024-01-03T03:49:48.128Z"
      },
      {
        "id": "viol_377914",
        "inspectionId": "insp_456241",
        "productId": "prod_032835",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-03T03:49:48.128Z",
        "updatedAt": "2024-01-03T03:49:48.128Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_032835_1",
        "inspectionId": "insp_456241",
        "productId": "prod_032835",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-03T03:49:48.128Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_502055",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 45",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.55034682001996,
      "longitude": 88.35814742292338,
      "address": "Local Kirana, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-02T04:02:46.061Z",
    "completedAt": "2024-02-02T04:32:46.061Z",
    "syncedAt": "2024-02-02T04:37:46.061Z",
    "createdAt": "2024-02-02T04:02:46.061Z",
    "updatedAt": "2024-02-02T04:02:46.061Z",
    "products": [
      {
        "id": "prod_608230",
        "inspectionId": "insp_502055",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_608230_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_516348",
              "inspectionId": "insp_502055",
              "productId": "prod_608230",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-02T04:02:46.061Z",
              "updatedAt": "2024-02-02T04:02:46.061Z"
            },
            {
              "id": "viol_520444",
              "inspectionId": "insp_502055",
              "productId": "prod_608230",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-02T04:02:46.061Z",
              "updatedAt": "2024-02-02T04:02:46.061Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-02T04:02:46.061Z",
        "updatedAt": "2024-02-02T04:02:46.061Z"
      }
    ],
    "violations": [
      {
        "id": "viol_516348",
        "inspectionId": "insp_502055",
        "productId": "prod_608230",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-02T04:02:46.061Z",
        "updatedAt": "2024-02-02T04:02:46.061Z"
      },
      {
        "id": "viol_520444",
        "inspectionId": "insp_502055",
        "productId": "prod_608230",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-02T04:02:46.061Z",
        "updatedAt": "2024-02-02T04:02:46.061Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_608230_1",
        "inspectionId": "insp_502055",
        "productId": "prod_608230",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-02T04:02:46.061Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_943835",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 46",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.596077154363687,
      "longitude": 88.41631721740721,
      "address": "Wholesale Market, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-25T03:39:24.397Z",
    "completedAt": "2024-02-25T04:09:24.397Z",
    "syncedAt": "2024-02-25T04:14:24.397Z",
    "createdAt": "2024-02-25T03:39:24.397Z",
    "updatedAt": "2024-02-25T03:39:24.397Z",
    "products": [
      {
        "id": "prod_942536",
        "inspectionId": "insp_943835",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_942536_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-25T03:39:24.397Z",
        "updatedAt": "2024-02-25T03:39:24.397Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_942536_1",
        "inspectionId": "insp_943835",
        "productId": "prod_942536",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-25T03:39:24.397Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_135926",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 47",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.579239452505718,
      "longitude": 88.36066460381336,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-22T23:27:42.799Z",
    "completedAt": "2024-01-22T23:57:42.799Z",
    "syncedAt": "2024-01-23T00:02:42.799Z",
    "createdAt": "2024-01-22T23:27:42.799Z",
    "updatedAt": "2024-01-22T23:27:42.799Z",
    "products": [
      {
        "id": "prod_251042",
        "inspectionId": "insp_135926",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_251042_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-22T23:27:42.799Z",
        "updatedAt": "2024-01-22T23:27:42.799Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_251042_1",
        "inspectionId": "insp_135926",
        "productId": "prod_251042",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-22T23:27:42.799Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_462061",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 48",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.607393747138172,
      "longitude": 88.34124811005863,
      "address": "Sadar Bazaar, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-07T08:56:58.907Z",
    "completedAt": "2024-01-07T09:26:58.907Z",
    "syncedAt": "2024-01-07T09:31:58.907Z",
    "createdAt": "2024-01-07T08:56:58.907Z",
    "updatedAt": "2024-01-07T08:56:58.907Z",
    "products": [
      {
        "id": "prod_915741",
        "inspectionId": "insp_462061",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_915741_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-07T08:56:58.907Z",
        "updatedAt": "2024-01-07T08:56:58.907Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_915741_1",
        "inspectionId": "insp_462061",
        "productId": "prod_915741",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-07T08:56:58.907Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_645751",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 49",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.53759853570137,
      "longitude": 88.3630637206791,
      "address": "Wholesale Market, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-06T12:23:31.457Z",
    "completedAt": "2024-03-06T12:53:31.457Z",
    "syncedAt": "2024-03-06T12:58:31.457Z",
    "createdAt": "2024-03-06T12:23:31.457Z",
    "updatedAt": "2024-03-06T12:23:31.457Z",
    "products": [
      {
        "id": "prod_972810",
        "inspectionId": "insp_645751",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_972810_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_649161",
              "inspectionId": "insp_645751",
              "productId": "prod_972810",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-06T12:23:31.457Z",
              "updatedAt": "2024-03-06T12:23:31.457Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-06T12:23:31.457Z",
        "updatedAt": "2024-03-06T12:23:31.457Z"
      }
    ],
    "violations": [
      {
        "id": "viol_649161",
        "inspectionId": "insp_645751",
        "productId": "prod_972810",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-06T12:23:31.457Z",
        "updatedAt": "2024-03-06T12:23:31.457Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_972810_1",
        "inspectionId": "insp_645751",
        "productId": "prod_972810",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-06T12:23:31.457Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_144730",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 50",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.53270105564555,
      "longitude": 88.38583422951923,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-15T16:09:05.637Z",
    "completedAt": "2024-02-15T16:39:05.637Z",
    "syncedAt": "2024-02-15T16:44:05.637Z",
    "createdAt": "2024-02-15T16:09:05.637Z",
    "updatedAt": "2024-02-15T16:09:05.637Z",
    "products": [
      {
        "id": "prod_406733",
        "inspectionId": "insp_144730",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_406733_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_368274",
              "inspectionId": "insp_144730",
              "productId": "prod_406733",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T16:09:05.637Z",
              "updatedAt": "2024-02-15T16:09:05.637Z"
            },
            {
              "id": "viol_615680",
              "inspectionId": "insp_144730",
              "productId": "prod_406733",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T16:09:05.637Z",
              "updatedAt": "2024-02-15T16:09:05.637Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-15T16:09:05.637Z",
        "updatedAt": "2024-02-15T16:09:05.637Z"
      }
    ],
    "violations": [
      {
        "id": "viol_368274",
        "inspectionId": "insp_144730",
        "productId": "prod_406733",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T16:09:05.637Z",
        "updatedAt": "2024-02-15T16:09:05.637Z"
      },
      {
        "id": "viol_615680",
        "inspectionId": "insp_144730",
        "productId": "prod_406733",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T16:09:05.637Z",
        "updatedAt": "2024-02-15T16:09:05.637Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_406733_1",
        "inspectionId": "insp_144730",
        "productId": "prod_406733",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-15T16:09:05.637Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_852529",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 51",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.575582626345035,
      "longitude": 88.47609097224276,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-24T15:26:10.338Z",
    "completedAt": "2024-01-24T15:56:10.338Z",
    "syncedAt": "2024-01-24T16:01:10.338Z",
    "createdAt": "2024-01-24T15:26:10.338Z",
    "updatedAt": "2024-01-24T15:26:10.338Z",
    "products": [
      {
        "id": "prod_499624",
        "inspectionId": "insp_852529",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_499624_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-24T15:26:10.338Z",
        "updatedAt": "2024-01-24T15:26:10.338Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_499624_1",
        "inspectionId": "insp_852529",
        "productId": "prod_499624",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-24T15:26:10.338Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_723433",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 52",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.536173739141617,
      "longitude": 88.36170990117067,
      "address": "Supermart, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-09T21:34:51.270Z",
    "completedAt": "2024-02-09T22:04:51.270Z",
    "syncedAt": "2024-02-09T22:09:51.270Z",
    "createdAt": "2024-02-09T21:34:51.270Z",
    "updatedAt": "2024-02-09T21:34:51.270Z",
    "products": [
      {
        "id": "prod_566056",
        "inspectionId": "insp_723433",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_566056_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_832995",
              "inspectionId": "insp_723433",
              "productId": "prod_566056",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-09T21:34:51.270Z",
              "updatedAt": "2024-02-09T21:34:51.270Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-09T21:34:51.270Z",
        "updatedAt": "2024-02-09T21:34:51.270Z"
      }
    ],
    "violations": [
      {
        "id": "viol_832995",
        "inspectionId": "insp_723433",
        "productId": "prod_566056",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-09T21:34:51.270Z",
        "updatedAt": "2024-02-09T21:34:51.270Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_566056_1",
        "inspectionId": "insp_723433",
        "productId": "prod_566056",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-09T21:34:51.270Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_450203",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 53",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.585052018250828,
      "longitude": 88.43030089036223,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-13T07:19:04.554Z",
    "completedAt": "2024-03-13T07:49:04.554Z",
    "syncedAt": "2024-03-13T07:54:04.554Z",
    "createdAt": "2024-03-13T07:19:04.554Z",
    "updatedAt": "2024-03-13T07:19:04.554Z",
    "products": [
      {
        "id": "prod_609322",
        "inspectionId": "insp_450203",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_609322_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-13T07:19:04.554Z",
        "updatedAt": "2024-03-13T07:19:04.554Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_609322_1",
        "inspectionId": "insp_450203",
        "productId": "prod_609322",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-13T07:19:04.554Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_016848",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 54",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.601535588753816,
      "longitude": 88.43581445471104,
      "address": "Sadar Bazaar, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-15T09:15:04.581Z",
    "completedAt": "2024-01-15T09:45:04.581Z",
    "syncedAt": "2024-01-15T09:50:04.581Z",
    "createdAt": "2024-01-15T09:15:04.581Z",
    "updatedAt": "2024-01-15T09:15:04.581Z",
    "products": [
      {
        "id": "prod_085813",
        "inspectionId": "insp_016848",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_085813_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_128329",
              "inspectionId": "insp_016848",
              "productId": "prod_085813",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-15T09:15:04.581Z",
              "updatedAt": "2024-01-15T09:15:04.581Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-15T09:15:04.581Z",
        "updatedAt": "2024-01-15T09:15:04.581Z"
      }
    ],
    "violations": [
      {
        "id": "viol_128329",
        "inspectionId": "insp_016848",
        "productId": "prod_085813",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-15T09:15:04.581Z",
        "updatedAt": "2024-01-15T09:15:04.581Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_085813_1",
        "inspectionId": "insp_016848",
        "productId": "prod_085813",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-15T09:15:04.581Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_477908",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 55",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.604235063101527,
      "longitude": 88.37636517129062,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-26T08:23:18.469Z",
    "completedAt": "2024-02-26T08:53:18.469Z",
    "syncedAt": "2024-02-26T08:58:18.469Z",
    "createdAt": "2024-02-26T08:23:18.469Z",
    "updatedAt": "2024-02-26T08:23:18.469Z",
    "products": [
      {
        "id": "prod_064928",
        "inspectionId": "insp_477908",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_064928_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_464330",
              "inspectionId": "insp_477908",
              "productId": "prod_064928",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-26T08:23:18.469Z",
              "updatedAt": "2024-02-26T08:23:18.469Z"
            },
            {
              "id": "viol_895706",
              "inspectionId": "insp_477908",
              "productId": "prod_064928",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-26T08:23:18.469Z",
              "updatedAt": "2024-02-26T08:23:18.469Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-26T08:23:18.469Z",
        "updatedAt": "2024-02-26T08:23:18.469Z"
      }
    ],
    "violations": [
      {
        "id": "viol_464330",
        "inspectionId": "insp_477908",
        "productId": "prod_064928",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-26T08:23:18.469Z",
        "updatedAt": "2024-02-26T08:23:18.469Z"
      },
      {
        "id": "viol_895706",
        "inspectionId": "insp_477908",
        "productId": "prod_064928",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-26T08:23:18.469Z",
        "updatedAt": "2024-02-26T08:23:18.469Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_064928_1",
        "inspectionId": "insp_477908",
        "productId": "prod_064928",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-26T08:23:18.469Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_405195",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 56",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.571308705893117,
      "longitude": 88.33035886434021,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-18T21:45:23.310Z",
    "completedAt": "2024-02-18T22:15:23.310Z",
    "syncedAt": "2024-02-18T22:20:23.310Z",
    "createdAt": "2024-02-18T21:45:23.310Z",
    "updatedAt": "2024-02-18T21:45:23.310Z",
    "products": [
      {
        "id": "prod_021712",
        "inspectionId": "insp_405195",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_021712_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_301761",
              "inspectionId": "insp_405195",
              "productId": "prod_021712",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-18T21:45:23.310Z",
              "updatedAt": "2024-02-18T21:45:23.310Z"
            },
            {
              "id": "viol_140047",
              "inspectionId": "insp_405195",
              "productId": "prod_021712",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-18T21:45:23.310Z",
              "updatedAt": "2024-02-18T21:45:23.310Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-18T21:45:23.310Z",
        "updatedAt": "2024-02-18T21:45:23.310Z"
      }
    ],
    "violations": [
      {
        "id": "viol_301761",
        "inspectionId": "insp_405195",
        "productId": "prod_021712",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-18T21:45:23.310Z",
        "updatedAt": "2024-02-18T21:45:23.310Z"
      },
      {
        "id": "viol_140047",
        "inspectionId": "insp_405195",
        "productId": "prod_021712",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-18T21:45:23.310Z",
        "updatedAt": "2024-02-18T21:45:23.310Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_021712_1",
        "inspectionId": "insp_405195",
        "productId": "prod_021712",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-18T21:45:23.310Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_157524",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 57",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.568951810812944,
      "longitude": 88.37588708639927,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-25T13:05:38.488Z",
    "createdAt": "2024-02-25T13:05:38.488Z",
    "updatedAt": "2024-02-25T13:05:38.488Z",
    "products": [
      {
        "id": "prod_442226",
        "inspectionId": "insp_157524",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_442226_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_388712",
              "inspectionId": "insp_157524",
              "productId": "prod_442226",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-25T13:05:38.488Z",
              "updatedAt": "2024-02-25T13:05:38.488Z"
            },
            {
              "id": "viol_293214",
              "inspectionId": "insp_157524",
              "productId": "prod_442226",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-25T13:05:38.488Z",
              "updatedAt": "2024-02-25T13:05:38.488Z"
            },
            {
              "id": "viol_593607",
              "inspectionId": "insp_157524",
              "productId": "prod_442226",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-25T13:05:38.488Z",
              "updatedAt": "2024-02-25T13:05:38.488Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-25T13:05:38.488Z",
        "updatedAt": "2024-02-25T13:05:38.488Z"
      }
    ],
    "violations": [
      {
        "id": "viol_388712",
        "inspectionId": "insp_157524",
        "productId": "prod_442226",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-25T13:05:38.488Z",
        "updatedAt": "2024-02-25T13:05:38.488Z"
      },
      {
        "id": "viol_293214",
        "inspectionId": "insp_157524",
        "productId": "prod_442226",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-25T13:05:38.488Z",
        "updatedAt": "2024-02-25T13:05:38.488Z"
      },
      {
        "id": "viol_593607",
        "inspectionId": "insp_157524",
        "productId": "prod_442226",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-25T13:05:38.488Z",
        "updatedAt": "2024-02-25T13:05:38.488Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_442226_1",
        "inspectionId": "insp_157524",
        "productId": "prod_442226",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-25T13:05:38.488Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_223514",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 58",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.495292230764818,
      "longitude": 88.33900728664115,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2023-12-31T05:35:32.986Z",
    "completedAt": "2023-12-31T06:05:32.986Z",
    "syncedAt": "2023-12-31T06:10:32.986Z",
    "createdAt": "2023-12-31T05:35:32.986Z",
    "updatedAt": "2023-12-31T05:35:32.986Z",
    "products": [
      {
        "id": "prod_887790",
        "inspectionId": "insp_223514",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_887790_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_038306",
              "inspectionId": "insp_223514",
              "productId": "prod_887790",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2023-12-31T05:35:32.986Z",
              "updatedAt": "2023-12-31T05:35:32.986Z"
            },
            {
              "id": "viol_636170",
              "inspectionId": "insp_223514",
              "productId": "prod_887790",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-31T05:35:32.986Z",
              "updatedAt": "2023-12-31T05:35:32.986Z"
            },
            {
              "id": "viol_598503",
              "inspectionId": "insp_223514",
              "productId": "prod_887790",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-31T05:35:32.986Z",
              "updatedAt": "2023-12-31T05:35:32.986Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-31T05:35:32.986Z",
        "updatedAt": "2023-12-31T05:35:32.986Z"
      }
    ],
    "violations": [
      {
        "id": "viol_038306",
        "inspectionId": "insp_223514",
        "productId": "prod_887790",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2023-12-31T05:35:32.986Z",
        "updatedAt": "2023-12-31T05:35:32.986Z"
      },
      {
        "id": "viol_636170",
        "inspectionId": "insp_223514",
        "productId": "prod_887790",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-31T05:35:32.986Z",
        "updatedAt": "2023-12-31T05:35:32.986Z"
      },
      {
        "id": "viol_598503",
        "inspectionId": "insp_223514",
        "productId": "prod_887790",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-31T05:35:32.986Z",
        "updatedAt": "2023-12-31T05:35:32.986Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_887790_1",
        "inspectionId": "insp_223514",
        "productId": "prod_887790",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-31T05:35:32.986Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_401480",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 59",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.563000915621245,
      "longitude": 88.44588817395642,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-22T11:15:40.797Z",
    "completedAt": "2024-02-22T11:45:40.797Z",
    "syncedAt": "2024-02-22T11:50:40.797Z",
    "createdAt": "2024-02-22T11:15:40.797Z",
    "updatedAt": "2024-02-22T11:15:40.797Z",
    "products": [
      {
        "id": "prod_616807",
        "inspectionId": "insp_401480",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_616807_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-22T11:15:40.797Z",
        "updatedAt": "2024-02-22T11:15:40.797Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_616807_1",
        "inspectionId": "insp_401480",
        "productId": "prod_616807",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-22T11:15:40.797Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_443783",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 60",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.577107856512317,
      "longitude": 88.44927781615196,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-08T12:10:55.683Z",
    "completedAt": "2024-01-08T12:40:55.683Z",
    "syncedAt": "2024-01-08T12:45:55.683Z",
    "createdAt": "2024-01-08T12:10:55.683Z",
    "updatedAt": "2024-01-08T12:10:55.683Z",
    "products": [
      {
        "id": "prod_570673",
        "inspectionId": "insp_443783",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_570673_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-08T12:10:55.683Z",
        "updatedAt": "2024-01-08T12:10:55.683Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_570673_1",
        "inspectionId": "insp_443783",
        "productId": "prod_570673",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-08T12:10:55.683Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_380424",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 61",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58224726697517,
      "longitude": 88.48343455405755,
      "address": "Local Kirana, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-31T03:21:03.504Z",
    "createdAt": "2024-01-31T03:21:03.504Z",
    "updatedAt": "2024-01-31T03:21:03.504Z",
    "products": [
      {
        "id": "prod_882180",
        "inspectionId": "insp_380424",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_882180_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-31T03:21:03.504Z",
        "updatedAt": "2024-01-31T03:21:03.504Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_882180_1",
        "inspectionId": "insp_380424",
        "productId": "prod_882180",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-31T03:21:03.504Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_116906",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 62",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.600274926307105,
      "longitude": 88.36005933762493,
      "address": "Local Kirana, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-17T01:41:59.953Z",
    "completedAt": "2024-03-17T02:11:59.953Z",
    "syncedAt": "2024-03-17T02:16:59.953Z",
    "createdAt": "2024-03-17T01:41:59.953Z",
    "updatedAt": "2024-03-17T01:41:59.953Z",
    "products": [
      {
        "id": "prod_133673",
        "inspectionId": "insp_116906",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_133673_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_448227",
              "inspectionId": "insp_116906",
              "productId": "prod_133673",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-17T01:41:59.953Z",
              "updatedAt": "2024-03-17T01:41:59.953Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-17T01:41:59.953Z",
        "updatedAt": "2024-03-17T01:41:59.953Z"
      }
    ],
    "violations": [
      {
        "id": "viol_448227",
        "inspectionId": "insp_116906",
        "productId": "prod_133673",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-17T01:41:59.953Z",
        "updatedAt": "2024-03-17T01:41:59.953Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_133673_1",
        "inspectionId": "insp_116906",
        "productId": "prod_133673",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-17T01:41:59.953Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_268633",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 63",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.54434338375717,
      "longitude": 88.35336071921867,
      "address": "Local Kirana, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-26T01:41:01.122Z",
    "completedAt": "2024-02-26T02:11:01.122Z",
    "syncedAt": "2024-02-26T02:16:01.122Z",
    "createdAt": "2024-02-26T01:41:01.122Z",
    "updatedAt": "2024-02-26T01:41:01.122Z",
    "products": [
      {
        "id": "prod_830467",
        "inspectionId": "insp_268633",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_830467_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_594394",
              "inspectionId": "insp_268633",
              "productId": "prod_830467",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-26T01:41:01.122Z",
              "updatedAt": "2024-02-26T01:41:01.122Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-26T01:41:01.122Z",
        "updatedAt": "2024-02-26T01:41:01.122Z"
      }
    ],
    "violations": [
      {
        "id": "viol_594394",
        "inspectionId": "insp_268633",
        "productId": "prod_830467",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-26T01:41:01.122Z",
        "updatedAt": "2024-02-26T01:41:01.122Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_830467_1",
        "inspectionId": "insp_268633",
        "productId": "prod_830467",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-26T01:41:01.122Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_966892",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 64",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.494617919075502,
      "longitude": 88.34465183479178,
      "address": "Supermart, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-26T03:18:43.762Z",
    "completedAt": "2024-01-26T03:48:43.762Z",
    "syncedAt": "2024-01-26T03:53:43.762Z",
    "createdAt": "2024-01-26T03:18:43.762Z",
    "updatedAt": "2024-01-26T03:18:43.762Z",
    "products": [
      {
        "id": "prod_187831",
        "inspectionId": "insp_966892",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_187831_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-26T03:18:43.762Z",
        "updatedAt": "2024-01-26T03:18:43.762Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_187831_1",
        "inspectionId": "insp_966892",
        "productId": "prod_187831",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-26T03:18:43.762Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_231239",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 65",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.606057949632433,
      "longitude": 88.33655623892709,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-24T10:03:07.864Z",
    "completedAt": "2024-02-24T10:33:07.864Z",
    "syncedAt": "2024-02-24T10:38:07.864Z",
    "createdAt": "2024-02-24T10:03:07.864Z",
    "updatedAt": "2024-02-24T10:03:07.864Z",
    "products": [
      {
        "id": "prod_701955",
        "inspectionId": "insp_231239",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_701955_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-24T10:03:07.864Z",
        "updatedAt": "2024-02-24T10:03:07.864Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_701955_1",
        "inspectionId": "insp_231239",
        "productId": "prod_701955",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-24T10:03:07.864Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_777334",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 66",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.516751898500235,
      "longitude": 88.34361352963853,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-03T18:29:55.893Z",
    "completedAt": "2024-02-03T18:59:55.893Z",
    "syncedAt": "2024-02-03T19:04:55.893Z",
    "createdAt": "2024-02-03T18:29:55.893Z",
    "updatedAt": "2024-02-03T18:29:55.893Z",
    "products": [
      {
        "id": "prod_306209",
        "inspectionId": "insp_777334",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_306209_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-03T18:29:55.893Z",
        "updatedAt": "2024-02-03T18:29:55.893Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_306209_1",
        "inspectionId": "insp_777334",
        "productId": "prod_306209",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-03T18:29:55.893Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_987468",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 67",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.495301488599292,
      "longitude": 88.36592632655787,
      "address": "Supermart, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-18T16:58:05.864Z",
    "completedAt": "2024-02-18T17:28:05.864Z",
    "syncedAt": "2024-02-18T17:33:05.864Z",
    "createdAt": "2024-02-18T16:58:05.864Z",
    "updatedAt": "2024-02-18T16:58:05.864Z",
    "products": [
      {
        "id": "prod_292073",
        "inspectionId": "insp_987468",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_292073_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-18T16:58:05.864Z",
        "updatedAt": "2024-02-18T16:58:05.864Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_292073_1",
        "inspectionId": "insp_987468",
        "productId": "prod_292073",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-18T16:58:05.864Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_421134",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 68",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.530226576208495,
      "longitude": 88.35518416554848,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2023-12-29T15:41:01.790Z",
    "completedAt": "2023-12-29T16:11:01.790Z",
    "syncedAt": "2023-12-29T16:16:01.790Z",
    "createdAt": "2023-12-29T15:41:01.790Z",
    "updatedAt": "2023-12-29T15:41:01.790Z",
    "products": [
      {
        "id": "prod_434066",
        "inspectionId": "insp_421134",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_434066_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_816533",
              "inspectionId": "insp_421134",
              "productId": "prod_434066",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2023-12-29T15:41:01.790Z",
              "updatedAt": "2023-12-29T15:41:01.790Z"
            },
            {
              "id": "viol_542155",
              "inspectionId": "insp_421134",
              "productId": "prod_434066",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-29T15:41:01.790Z",
              "updatedAt": "2023-12-29T15:41:01.790Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-29T15:41:01.790Z",
        "updatedAt": "2023-12-29T15:41:01.790Z"
      }
    ],
    "violations": [
      {
        "id": "viol_816533",
        "inspectionId": "insp_421134",
        "productId": "prod_434066",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2023-12-29T15:41:01.790Z",
        "updatedAt": "2023-12-29T15:41:01.790Z"
      },
      {
        "id": "viol_542155",
        "inspectionId": "insp_421134",
        "productId": "prod_434066",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-29T15:41:01.790Z",
        "updatedAt": "2023-12-29T15:41:01.790Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_434066_1",
        "inspectionId": "insp_421134",
        "productId": "prod_434066",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-29T15:41:01.790Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_599579",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 69",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.585644374709865,
      "longitude": 88.42231522157321,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-16T03:57:57.856Z",
    "completedAt": "2024-01-16T04:27:57.856Z",
    "syncedAt": "2024-01-16T04:32:57.856Z",
    "createdAt": "2024-01-16T03:57:57.856Z",
    "updatedAt": "2024-01-16T03:57:57.856Z",
    "products": [
      {
        "id": "prod_117228",
        "inspectionId": "insp_599579",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_117228_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-16T03:57:57.856Z",
        "updatedAt": "2024-01-16T03:57:57.856Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_117228_1",
        "inspectionId": "insp_599579",
        "productId": "prod_117228",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-16T03:57:57.856Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_759127",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 70",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.571547284758566,
      "longitude": 88.34408069882676,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-22T22:23:13.162Z",
    "completedAt": "2024-01-22T22:53:13.162Z",
    "syncedAt": "2024-01-22T22:58:13.162Z",
    "createdAt": "2024-01-22T22:23:13.162Z",
    "updatedAt": "2024-01-22T22:23:13.162Z",
    "products": [
      {
        "id": "prod_974044",
        "inspectionId": "insp_759127",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_974044_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_056805",
              "inspectionId": "insp_759127",
              "productId": "prod_974044",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-01-22T22:23:13.162Z",
              "updatedAt": "2024-01-22T22:23:13.162Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-22T22:23:13.162Z",
        "updatedAt": "2024-01-22T22:23:13.162Z"
      }
    ],
    "violations": [
      {
        "id": "viol_056805",
        "inspectionId": "insp_759127",
        "productId": "prod_974044",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-01-22T22:23:13.162Z",
        "updatedAt": "2024-01-22T22:23:13.162Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_974044_1",
        "inspectionId": "insp_759127",
        "productId": "prod_974044",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-22T22:23:13.162Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_164926",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 71",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.60766939649798,
      "longitude": 88.39014936151803,
      "address": "Wholesale Market, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-15T07:22:03.413Z",
    "completedAt": "2024-01-15T07:52:03.413Z",
    "syncedAt": "2024-01-15T07:57:03.413Z",
    "createdAt": "2024-01-15T07:22:03.413Z",
    "updatedAt": "2024-01-15T07:22:03.413Z",
    "products": [
      {
        "id": "prod_946790",
        "inspectionId": "insp_164926",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_946790_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-15T07:22:03.413Z",
        "updatedAt": "2024-01-15T07:22:03.413Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_946790_1",
        "inspectionId": "insp_164926",
        "productId": "prod_946790",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-15T07:22:03.413Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_376356",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 72",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58231931578389,
      "longitude": 88.40765502608532,
      "address": "Wholesale Market, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-22T03:47:27.720Z",
    "completedAt": "2024-03-22T04:17:27.720Z",
    "syncedAt": "2024-03-22T04:22:27.720Z",
    "createdAt": "2024-03-22T03:47:27.720Z",
    "updatedAt": "2024-03-22T03:47:27.720Z",
    "products": [
      {
        "id": "prod_264593",
        "inspectionId": "insp_376356",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_264593_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-22T03:47:27.720Z",
        "updatedAt": "2024-03-22T03:47:27.720Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_264593_1",
        "inspectionId": "insp_376356",
        "productId": "prod_264593",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-22T03:47:27.720Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_371999",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 73",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.580004902162358,
      "longitude": 88.48810632388135,
      "address": "Wholesale Market, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-03T10:26:17.879Z",
    "completedAt": "2024-01-03T10:56:17.879Z",
    "syncedAt": "2024-01-03T11:01:17.879Z",
    "createdAt": "2024-01-03T10:26:17.879Z",
    "updatedAt": "2024-01-03T10:26:17.879Z",
    "products": [
      {
        "id": "prod_381339",
        "inspectionId": "insp_371999",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_381339_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-03T10:26:17.879Z",
        "updatedAt": "2024-01-03T10:26:17.879Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_381339_1",
        "inspectionId": "insp_371999",
        "productId": "prod_381339",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-03T10:26:17.879Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_326669",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 74",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.50214289420131,
      "longitude": 88.34554513633749,
      "address": "Supermart, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-20T08:57:19.416Z",
    "completedAt": "2024-01-20T09:27:19.416Z",
    "syncedAt": "2024-01-20T09:32:19.416Z",
    "createdAt": "2024-01-20T08:57:19.416Z",
    "updatedAt": "2024-01-20T08:57:19.416Z",
    "products": [
      {
        "id": "prod_346813",
        "inspectionId": "insp_326669",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_346813_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-20T08:57:19.416Z",
        "updatedAt": "2024-01-20T08:57:19.416Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_346813_1",
        "inspectionId": "insp_326669",
        "productId": "prod_346813",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-20T08:57:19.416Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_842927",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 75",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.592408989140313,
      "longitude": 88.39788165592661,
      "address": "Sadar Bazaar, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-12T21:27:24.182Z",
    "completedAt": "2024-02-12T21:57:24.182Z",
    "syncedAt": "2024-02-12T22:02:24.182Z",
    "createdAt": "2024-02-12T21:27:24.182Z",
    "updatedAt": "2024-02-12T21:27:24.182Z",
    "products": [
      {
        "id": "prod_813084",
        "inspectionId": "insp_842927",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_813084_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_033827",
              "inspectionId": "insp_842927",
              "productId": "prod_813084",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-12T21:27:24.182Z",
              "updatedAt": "2024-02-12T21:27:24.182Z"
            },
            {
              "id": "viol_740768",
              "inspectionId": "insp_842927",
              "productId": "prod_813084",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-12T21:27:24.182Z",
              "updatedAt": "2024-02-12T21:27:24.182Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-12T21:27:24.182Z",
        "updatedAt": "2024-02-12T21:27:24.182Z"
      }
    ],
    "violations": [
      {
        "id": "viol_033827",
        "inspectionId": "insp_842927",
        "productId": "prod_813084",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-12T21:27:24.182Z",
        "updatedAt": "2024-02-12T21:27:24.182Z"
      },
      {
        "id": "viol_740768",
        "inspectionId": "insp_842927",
        "productId": "prod_813084",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-12T21:27:24.182Z",
        "updatedAt": "2024-02-12T21:27:24.182Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_813084_1",
        "inspectionId": "insp_842927",
        "productId": "prod_813084",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-12T21:27:24.182Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_583238",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 76",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58249212854225,
      "longitude": 88.48369885110777,
      "address": "Wholesale Market, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-07T17:04:15.971Z",
    "createdAt": "2024-03-07T17:04:15.971Z",
    "updatedAt": "2024-03-07T17:04:15.971Z",
    "products": [
      {
        "id": "prod_397253",
        "inspectionId": "insp_583238",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_397253_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-07T17:04:15.971Z",
        "updatedAt": "2024-03-07T17:04:15.971Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_397253_1",
        "inspectionId": "insp_583238",
        "productId": "prod_397253",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-07T17:04:15.971Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_566893",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 77",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.599310922039237,
      "longitude": 88.45930996033535,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-23T21:08:01.611Z",
    "completedAt": "2024-01-23T21:38:01.611Z",
    "syncedAt": "2024-01-23T21:43:01.611Z",
    "createdAt": "2024-01-23T21:08:01.611Z",
    "updatedAt": "2024-01-23T21:08:01.611Z",
    "products": [
      {
        "id": "prod_544452",
        "inspectionId": "insp_566893",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_544452_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-23T21:08:01.611Z",
        "updatedAt": "2024-01-23T21:08:01.611Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_544452_1",
        "inspectionId": "insp_566893",
        "productId": "prod_544452",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-23T21:08:01.611Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_974879",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 78",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.565230651495078,
      "longitude": 88.36928637002981,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-11T12:01:04.077Z",
    "completedAt": "2024-01-11T12:31:04.077Z",
    "syncedAt": "2024-01-11T12:36:04.077Z",
    "createdAt": "2024-01-11T12:01:04.077Z",
    "updatedAt": "2024-01-11T12:01:04.077Z",
    "products": [
      {
        "id": "prod_598317",
        "inspectionId": "insp_974879",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_598317_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-11T12:01:04.077Z",
        "updatedAt": "2024-01-11T12:01:04.077Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_598317_1",
        "inspectionId": "insp_974879",
        "productId": "prod_598317",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-11T12:01:04.077Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_150392",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 79",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.565154353212158,
      "longitude": 88.36113866504881,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-15T06:53:27.376Z",
    "completedAt": "2024-02-15T07:23:27.376Z",
    "syncedAt": "2024-02-15T07:28:27.376Z",
    "createdAt": "2024-02-15T06:53:27.376Z",
    "updatedAt": "2024-02-15T06:53:27.376Z",
    "products": [
      {
        "id": "prod_377189",
        "inspectionId": "insp_150392",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_377189_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_520167",
              "inspectionId": "insp_150392",
              "productId": "prod_377189",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T06:53:27.376Z",
              "updatedAt": "2024-02-15T06:53:27.376Z"
            },
            {
              "id": "viol_061225",
              "inspectionId": "insp_150392",
              "productId": "prod_377189",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T06:53:27.376Z",
              "updatedAt": "2024-02-15T06:53:27.376Z"
            },
            {
              "id": "viol_506250",
              "inspectionId": "insp_150392",
              "productId": "prod_377189",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T06:53:27.376Z",
              "updatedAt": "2024-02-15T06:53:27.376Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-15T06:53:27.376Z",
        "updatedAt": "2024-02-15T06:53:27.376Z"
      }
    ],
    "violations": [
      {
        "id": "viol_520167",
        "inspectionId": "insp_150392",
        "productId": "prod_377189",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T06:53:27.376Z",
        "updatedAt": "2024-02-15T06:53:27.376Z"
      },
      {
        "id": "viol_061225",
        "inspectionId": "insp_150392",
        "productId": "prod_377189",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T06:53:27.376Z",
        "updatedAt": "2024-02-15T06:53:27.376Z"
      },
      {
        "id": "viol_506250",
        "inspectionId": "insp_150392",
        "productId": "prod_377189",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T06:53:27.376Z",
        "updatedAt": "2024-02-15T06:53:27.376Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_377189_1",
        "inspectionId": "insp_150392",
        "productId": "prod_377189",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-15T06:53:27.376Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_553589",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 80",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.555477971599082,
      "longitude": 88.35137786273887,
      "address": "Supermart, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-20T19:33:17.663Z",
    "completedAt": "2024-03-20T20:03:17.663Z",
    "syncedAt": "2024-03-20T20:08:17.663Z",
    "createdAt": "2024-03-20T19:33:17.663Z",
    "updatedAt": "2024-03-20T19:33:17.663Z",
    "products": [
      {
        "id": "prod_875464",
        "inspectionId": "insp_553589",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_875464_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_387809",
              "inspectionId": "insp_553589",
              "productId": "prod_875464",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-20T19:33:17.663Z",
              "updatedAt": "2024-03-20T19:33:17.663Z"
            },
            {
              "id": "viol_655449",
              "inspectionId": "insp_553589",
              "productId": "prod_875464",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-20T19:33:17.663Z",
              "updatedAt": "2024-03-20T19:33:17.663Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-20T19:33:17.663Z",
        "updatedAt": "2024-03-20T19:33:17.663Z"
      }
    ],
    "violations": [
      {
        "id": "viol_387809",
        "inspectionId": "insp_553589",
        "productId": "prod_875464",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-20T19:33:17.663Z",
        "updatedAt": "2024-03-20T19:33:17.663Z"
      },
      {
        "id": "viol_655449",
        "inspectionId": "insp_553589",
        "productId": "prod_875464",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-20T19:33:17.663Z",
        "updatedAt": "2024-03-20T19:33:17.663Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_875464_1",
        "inspectionId": "insp_553589",
        "productId": "prod_875464",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-20T19:33:17.663Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_017728",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 81",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.579974953291952,
      "longitude": 88.34346859173769,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-02T22:19:03.588Z",
    "completedAt": "2024-01-02T22:49:03.588Z",
    "syncedAt": "2024-01-02T22:54:03.588Z",
    "createdAt": "2024-01-02T22:19:03.588Z",
    "updatedAt": "2024-01-02T22:19:03.588Z",
    "products": [
      {
        "id": "prod_725681",
        "inspectionId": "insp_017728",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_725681_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_820492",
              "inspectionId": "insp_017728",
              "productId": "prod_725681",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-02T22:19:03.588Z",
              "updatedAt": "2024-01-02T22:19:03.588Z"
            },
            {
              "id": "viol_508403",
              "inspectionId": "insp_017728",
              "productId": "prod_725681",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-02T22:19:03.588Z",
              "updatedAt": "2024-01-02T22:19:03.588Z"
            },
            {
              "id": "viol_850890",
              "inspectionId": "insp_017728",
              "productId": "prod_725681",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-02T22:19:03.588Z",
              "updatedAt": "2024-01-02T22:19:03.588Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-02T22:19:03.588Z",
        "updatedAt": "2024-01-02T22:19:03.588Z"
      }
    ],
    "violations": [
      {
        "id": "viol_820492",
        "inspectionId": "insp_017728",
        "productId": "prod_725681",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-02T22:19:03.588Z",
        "updatedAt": "2024-01-02T22:19:03.588Z"
      },
      {
        "id": "viol_508403",
        "inspectionId": "insp_017728",
        "productId": "prod_725681",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-02T22:19:03.588Z",
        "updatedAt": "2024-01-02T22:19:03.588Z"
      },
      {
        "id": "viol_850890",
        "inspectionId": "insp_017728",
        "productId": "prod_725681",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-02T22:19:03.588Z",
        "updatedAt": "2024-01-02T22:19:03.588Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_725681_1",
        "inspectionId": "insp_017728",
        "productId": "prod_725681",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-02T22:19:03.588Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_867641",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 82",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58137786320653,
      "longitude": 88.46225168884915,
      "address": "Sadar Bazaar, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-17T20:00:17.187Z",
    "createdAt": "2024-02-17T20:00:17.187Z",
    "updatedAt": "2024-02-17T20:00:17.187Z",
    "products": [
      {
        "id": "prod_790908",
        "inspectionId": "insp_867641",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_790908_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-17T20:00:17.187Z",
        "updatedAt": "2024-02-17T20:00:17.187Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_790908_1",
        "inspectionId": "insp_867641",
        "productId": "prod_790908",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-17T20:00:17.187Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_476262",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 83",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.548488138097554,
      "longitude": 88.34473450873108,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-06T01:20:31.901Z",
    "completedAt": "2024-03-06T01:50:31.901Z",
    "syncedAt": "2024-03-06T01:55:31.901Z",
    "createdAt": "2024-03-06T01:20:31.901Z",
    "updatedAt": "2024-03-06T01:20:31.901Z",
    "products": [
      {
        "id": "prod_639409",
        "inspectionId": "insp_476262",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_639409_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_190103",
              "inspectionId": "insp_476262",
              "productId": "prod_639409",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-06T01:20:31.901Z",
              "updatedAt": "2024-03-06T01:20:31.901Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-06T01:20:31.901Z",
        "updatedAt": "2024-03-06T01:20:31.901Z"
      }
    ],
    "violations": [
      {
        "id": "viol_190103",
        "inspectionId": "insp_476262",
        "productId": "prod_639409",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-06T01:20:31.901Z",
        "updatedAt": "2024-03-06T01:20:31.901Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_639409_1",
        "inspectionId": "insp_476262",
        "productId": "prod_639409",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-06T01:20:31.901Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_888677",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 84",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.56827992914596,
      "longitude": 88.43709107200593,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-04T10:44:25.397Z",
    "completedAt": "2024-01-04T11:14:25.397Z",
    "syncedAt": "2024-01-04T11:19:25.397Z",
    "createdAt": "2024-01-04T10:44:25.397Z",
    "updatedAt": "2024-01-04T10:44:25.397Z",
    "products": [
      {
        "id": "prod_464311",
        "inspectionId": "insp_888677",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_464311_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-04T10:44:25.397Z",
        "updatedAt": "2024-01-04T10:44:25.397Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_464311_1",
        "inspectionId": "insp_888677",
        "productId": "prod_464311",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-04T10:44:25.397Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_930205",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 85",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.56701785969708,
      "longitude": 88.42136062788161,
      "address": "Sadar Bazaar, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-28T12:09:08.698Z",
    "completedAt": "2024-01-28T12:39:08.698Z",
    "syncedAt": "2024-01-28T12:44:08.698Z",
    "createdAt": "2024-01-28T12:09:08.698Z",
    "updatedAt": "2024-01-28T12:09:08.698Z",
    "products": [
      {
        "id": "prod_479552",
        "inspectionId": "insp_930205",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_479552_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-28T12:09:08.698Z",
        "updatedAt": "2024-01-28T12:09:08.698Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_479552_1",
        "inspectionId": "insp_930205",
        "productId": "prod_479552",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-28T12:09:08.698Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_275161",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 86",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.574289317023865,
      "longitude": 88.39801207655346,
      "address": "Supermart, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-26T12:14:01.109Z",
    "completedAt": "2024-01-26T12:44:01.109Z",
    "syncedAt": "2024-01-26T12:49:01.109Z",
    "createdAt": "2024-01-26T12:14:01.109Z",
    "updatedAt": "2024-01-26T12:14:01.109Z",
    "products": [
      {
        "id": "prod_512264",
        "inspectionId": "insp_275161",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_512264_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_000473",
              "inspectionId": "insp_275161",
              "productId": "prod_512264",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-01-26T12:14:01.109Z",
              "updatedAt": "2024-01-26T12:14:01.109Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-26T12:14:01.109Z",
        "updatedAt": "2024-01-26T12:14:01.109Z"
      }
    ],
    "violations": [
      {
        "id": "viol_000473",
        "inspectionId": "insp_275161",
        "productId": "prod_512264",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-01-26T12:14:01.109Z",
        "updatedAt": "2024-01-26T12:14:01.109Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_512264_1",
        "inspectionId": "insp_275161",
        "productId": "prod_512264",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-26T12:14:01.109Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_063381",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 87",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.569742086982153,
      "longitude": 88.37451332800997,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-22T22:28:21.716Z",
    "createdAt": "2024-02-22T22:28:21.716Z",
    "updatedAt": "2024-02-22T22:28:21.716Z",
    "products": [
      {
        "id": "prod_899406",
        "inspectionId": "insp_063381",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_899406_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_109518",
              "inspectionId": "insp_063381",
              "productId": "prod_899406",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-22T22:28:21.716Z",
              "updatedAt": "2024-02-22T22:28:21.716Z"
            },
            {
              "id": "viol_876999",
              "inspectionId": "insp_063381",
              "productId": "prod_899406",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-22T22:28:21.716Z",
              "updatedAt": "2024-02-22T22:28:21.716Z"
            },
            {
              "id": "viol_516574",
              "inspectionId": "insp_063381",
              "productId": "prod_899406",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-22T22:28:21.716Z",
              "updatedAt": "2024-02-22T22:28:21.716Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-22T22:28:21.716Z",
        "updatedAt": "2024-02-22T22:28:21.716Z"
      }
    ],
    "violations": [
      {
        "id": "viol_109518",
        "inspectionId": "insp_063381",
        "productId": "prod_899406",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-22T22:28:21.716Z",
        "updatedAt": "2024-02-22T22:28:21.716Z"
      },
      {
        "id": "viol_876999",
        "inspectionId": "insp_063381",
        "productId": "prod_899406",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-22T22:28:21.716Z",
        "updatedAt": "2024-02-22T22:28:21.716Z"
      },
      {
        "id": "viol_516574",
        "inspectionId": "insp_063381",
        "productId": "prod_899406",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-22T22:28:21.716Z",
        "updatedAt": "2024-02-22T22:28:21.716Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_899406_1",
        "inspectionId": "insp_063381",
        "productId": "prod_899406",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-22T22:28:21.716Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_036620",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 88",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.535450982035346,
      "longitude": 88.340388611483,
      "address": "Wholesale Market, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-14T07:45:34.546Z",
    "completedAt": "2024-03-14T08:15:34.546Z",
    "syncedAt": "2024-03-14T08:20:34.546Z",
    "createdAt": "2024-03-14T07:45:34.546Z",
    "updatedAt": "2024-03-14T07:45:34.546Z",
    "products": [
      {
        "id": "prod_707846",
        "inspectionId": "insp_036620",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_707846_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-14T07:45:34.546Z",
        "updatedAt": "2024-03-14T07:45:34.546Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_707846_1",
        "inspectionId": "insp_036620",
        "productId": "prod_707846",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-14T07:45:34.546Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_312176",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 89",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.529697810042542,
      "longitude": 88.38082864368496,
      "address": "Local Kirana, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2023-12-27T03:57:10.756Z",
    "completedAt": "2023-12-27T04:27:10.756Z",
    "syncedAt": "2023-12-27T04:32:10.756Z",
    "createdAt": "2023-12-27T03:57:10.756Z",
    "updatedAt": "2023-12-27T03:57:10.756Z",
    "products": [
      {
        "id": "prod_853649",
        "inspectionId": "insp_312176",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_853649_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-27T03:57:10.756Z",
        "updatedAt": "2023-12-27T03:57:10.756Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_853649_1",
        "inspectionId": "insp_312176",
        "productId": "prod_853649",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-27T03:57:10.756Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_227585",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 90",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.599945859883466,
      "longitude": 88.37120149774886,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-21T20:25:28.011Z",
    "completedAt": "2024-02-21T20:55:28.011Z",
    "syncedAt": "2024-02-21T21:00:28.011Z",
    "createdAt": "2024-02-21T20:25:28.011Z",
    "updatedAt": "2024-02-21T20:25:28.011Z",
    "products": [
      {
        "id": "prod_781473",
        "inspectionId": "insp_227585",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_781473_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-21T20:25:28.011Z",
        "updatedAt": "2024-02-21T20:25:28.011Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_781473_1",
        "inspectionId": "insp_227585",
        "productId": "prod_781473",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-21T20:25:28.011Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_548412",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 91",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.496190181477854,
      "longitude": 88.37245534412139,
      "address": "Supermart, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-17T18:23:24.133Z",
    "completedAt": "2024-01-17T18:53:24.133Z",
    "syncedAt": "2024-01-17T18:58:24.133Z",
    "createdAt": "2024-01-17T18:23:24.133Z",
    "updatedAt": "2024-01-17T18:23:24.133Z",
    "products": [
      {
        "id": "prod_872025",
        "inspectionId": "insp_548412",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_872025_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-17T18:23:24.133Z",
        "updatedAt": "2024-01-17T18:23:24.133Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_872025_1",
        "inspectionId": "insp_548412",
        "productId": "prod_872025",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-17T18:23:24.133Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_386843",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 92",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.540521074082648,
      "longitude": 88.33259299790944,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-26T00:45:29.540Z",
    "completedAt": "2024-02-26T01:15:29.540Z",
    "syncedAt": "2024-02-26T01:20:29.540Z",
    "createdAt": "2024-02-26T00:45:29.540Z",
    "updatedAt": "2024-02-26T00:45:29.540Z",
    "products": [
      {
        "id": "prod_296395",
        "inspectionId": "insp_386843",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_296395_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-26T00:45:29.540Z",
        "updatedAt": "2024-02-26T00:45:29.540Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_296395_1",
        "inspectionId": "insp_386843",
        "productId": "prod_296395",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-26T00:45:29.540Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_543973",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 93",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.50070553065028,
      "longitude": 88.34059155145951,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-06T03:57:15.133Z",
    "completedAt": "2024-03-06T04:27:15.133Z",
    "syncedAt": "2024-03-06T04:32:15.133Z",
    "createdAt": "2024-03-06T03:57:15.133Z",
    "updatedAt": "2024-03-06T03:57:15.133Z",
    "products": [
      {
        "id": "prod_602025",
        "inspectionId": "insp_543973",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_602025_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-06T03:57:15.133Z",
        "updatedAt": "2024-03-06T03:57:15.133Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_602025_1",
        "inspectionId": "insp_543973",
        "productId": "prod_602025",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-06T03:57:15.133Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_486916",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 94",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.59666604284402,
      "longitude": 88.37963142340567,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2023-12-31T16:02:20.837Z",
    "completedAt": "2023-12-31T16:32:20.837Z",
    "syncedAt": "2023-12-31T16:37:20.837Z",
    "createdAt": "2023-12-31T16:02:20.837Z",
    "updatedAt": "2023-12-31T16:02:20.837Z",
    "products": [
      {
        "id": "prod_994637",
        "inspectionId": "insp_486916",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_994637_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-31T16:02:20.837Z",
        "updatedAt": "2023-12-31T16:02:20.837Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_994637_1",
        "inspectionId": "insp_486916",
        "productId": "prod_994637",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-31T16:02:20.837Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_208620",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 95",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.561202503668703,
      "longitude": 88.36923637000477,
      "address": "Sadar Bazaar, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-24T18:01:04.956Z",
    "completedAt": "2024-02-24T18:31:04.956Z",
    "syncedAt": "2024-02-24T18:36:04.956Z",
    "createdAt": "2024-02-24T18:01:04.956Z",
    "updatedAt": "2024-02-24T18:01:04.956Z",
    "products": [
      {
        "id": "prod_682260",
        "inspectionId": "insp_208620",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_682260_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-24T18:01:04.956Z",
        "updatedAt": "2024-02-24T18:01:04.956Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_682260_1",
        "inspectionId": "insp_208620",
        "productId": "prod_682260",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-24T18:01:04.956Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_694286",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 96",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.51987704761835,
      "longitude": 88.35169069145103,
      "address": "Connaught Place, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-26T14:47:11.885Z",
    "completedAt": "2024-02-26T15:17:11.885Z",
    "syncedAt": "2024-02-26T15:22:11.885Z",
    "createdAt": "2024-02-26T14:47:11.885Z",
    "updatedAt": "2024-02-26T14:47:11.885Z",
    "products": [
      {
        "id": "prod_956144",
        "inspectionId": "insp_694286",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_956144_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-26T14:47:11.885Z",
        "updatedAt": "2024-02-26T14:47:11.885Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_956144_1",
        "inspectionId": "insp_694286",
        "productId": "prod_956144",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-26T14:47:11.885Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_350686",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 97",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58964062867157,
      "longitude": 88.38055591907413,
      "address": "Connaught Place, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-15T00:33:41.168Z",
    "completedAt": "2024-01-15T01:03:41.168Z",
    "syncedAt": "2024-01-15T01:08:41.168Z",
    "createdAt": "2024-01-15T00:33:41.168Z",
    "updatedAt": "2024-01-15T00:33:41.168Z",
    "products": [
      {
        "id": "prod_362199",
        "inspectionId": "insp_350686",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_362199_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-15T00:33:41.168Z",
        "updatedAt": "2024-01-15T00:33:41.168Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_362199_1",
        "inspectionId": "insp_350686",
        "productId": "prod_362199",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-15T00:33:41.168Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_512530",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 98",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.557651779281418,
      "longitude": 88.47625633275017,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-10T22:11:29.549Z",
    "completedAt": "2024-03-10T22:41:29.549Z",
    "syncedAt": "2024-03-10T22:46:29.549Z",
    "createdAt": "2024-03-10T22:11:29.549Z",
    "updatedAt": "2024-03-10T22:11:29.549Z",
    "products": [
      {
        "id": "prod_418792",
        "inspectionId": "insp_512530",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_418792_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-10T22:11:29.549Z",
        "updatedAt": "2024-03-10T22:11:29.549Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_418792_1",
        "inspectionId": "insp_512530",
        "productId": "prod_418792",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-10T22:11:29.549Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_714234",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 99",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.555069787377846,
      "longitude": 88.3300505318196,
      "address": "Local Kirana, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-18T01:55:58.015Z",
    "completedAt": "2024-02-18T02:25:58.015Z",
    "syncedAt": "2024-02-18T02:30:58.015Z",
    "createdAt": "2024-02-18T01:55:58.015Z",
    "updatedAt": "2024-02-18T01:55:58.015Z",
    "products": [
      {
        "id": "prod_389143",
        "inspectionId": "insp_714234",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_389143_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_911615",
              "inspectionId": "insp_714234",
              "productId": "prod_389143",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-18T01:55:58.015Z",
              "updatedAt": "2024-02-18T01:55:58.015Z"
            },
            {
              "id": "viol_474462",
              "inspectionId": "insp_714234",
              "productId": "prod_389143",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-18T01:55:58.015Z",
              "updatedAt": "2024-02-18T01:55:58.015Z"
            },
            {
              "id": "viol_301102",
              "inspectionId": "insp_714234",
              "productId": "prod_389143",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-02-18T01:55:58.015Z",
              "updatedAt": "2024-02-18T01:55:58.015Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-18T01:55:58.015Z",
        "updatedAt": "2024-02-18T01:55:58.015Z"
      }
    ],
    "violations": [
      {
        "id": "viol_911615",
        "inspectionId": "insp_714234",
        "productId": "prod_389143",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-18T01:55:58.015Z",
        "updatedAt": "2024-02-18T01:55:58.015Z"
      },
      {
        "id": "viol_474462",
        "inspectionId": "insp_714234",
        "productId": "prod_389143",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-18T01:55:58.015Z",
        "updatedAt": "2024-02-18T01:55:58.015Z"
      },
      {
        "id": "viol_301102",
        "inspectionId": "insp_714234",
        "productId": "prod_389143",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-02-18T01:55:58.015Z",
        "updatedAt": "2024-02-18T01:55:58.015Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_389143_1",
        "inspectionId": "insp_714234",
        "productId": "prod_389143",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-18T01:55:58.015Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_681395",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 100",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.564067007557938,
      "longitude": 88.3788466393747,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-08T06:48:48.293Z",
    "completedAt": "2024-03-08T07:18:48.293Z",
    "syncedAt": "2024-03-08T07:23:48.293Z",
    "createdAt": "2024-03-08T06:48:48.293Z",
    "updatedAt": "2024-03-08T06:48:48.293Z",
    "products": [
      {
        "id": "prod_614380",
        "inspectionId": "insp_681395",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_614380_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_731666",
              "inspectionId": "insp_681395",
              "productId": "prod_614380",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "MEDIUM",
              "inspectorVerified": true,
              "createdAt": "2024-03-08T06:48:48.293Z",
              "updatedAt": "2024-03-08T06:48:48.293Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-08T06:48:48.293Z",
        "updatedAt": "2024-03-08T06:48:48.293Z"
      }
    ],
    "violations": [
      {
        "id": "viol_731666",
        "inspectionId": "insp_681395",
        "productId": "prod_614380",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "MEDIUM",
        "inspectorVerified": true,
        "createdAt": "2024-03-08T06:48:48.293Z",
        "updatedAt": "2024-03-08T06:48:48.293Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_614380_1",
        "inspectionId": "insp_681395",
        "productId": "prod_614380",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-08T06:48:48.293Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_966555",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 101",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.58706370305812,
      "longitude": 88.36764658654064,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2023-12-28T02:59:01.189Z",
    "completedAt": "2023-12-28T03:29:01.189Z",
    "syncedAt": "2023-12-28T03:34:01.189Z",
    "createdAt": "2023-12-28T02:59:01.189Z",
    "updatedAt": "2023-12-28T02:59:01.189Z",
    "products": [
      {
        "id": "prod_641043",
        "inspectionId": "insp_966555",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_641043_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_734557",
              "inspectionId": "insp_966555",
              "productId": "prod_641043",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-28T02:59:01.189Z",
              "updatedAt": "2023-12-28T02:59:01.189Z"
            },
            {
              "id": "viol_193213",
              "inspectionId": "insp_966555",
              "productId": "prod_641043",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2023-12-28T02:59:01.189Z",
              "updatedAt": "2023-12-28T02:59:01.189Z"
            },
            {
              "id": "viol_299183",
              "inspectionId": "insp_966555",
              "productId": "prod_641043",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2023-12-28T02:59:01.189Z",
              "updatedAt": "2023-12-28T02:59:01.189Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-28T02:59:01.189Z",
        "updatedAt": "2023-12-28T02:59:01.189Z"
      }
    ],
    "violations": [
      {
        "id": "viol_734557",
        "inspectionId": "insp_966555",
        "productId": "prod_641043",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-28T02:59:01.189Z",
        "updatedAt": "2023-12-28T02:59:01.189Z"
      },
      {
        "id": "viol_193213",
        "inspectionId": "insp_966555",
        "productId": "prod_641043",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2023-12-28T02:59:01.189Z",
        "updatedAt": "2023-12-28T02:59:01.189Z"
      },
      {
        "id": "viol_299183",
        "inspectionId": "insp_966555",
        "productId": "prod_641043",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2023-12-28T02:59:01.189Z",
        "updatedAt": "2023-12-28T02:59:01.189Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_641043_1",
        "inspectionId": "insp_966555",
        "productId": "prod_641043",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-28T02:59:01.189Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_679010",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 102",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.586827412356485,
      "longitude": 88.35593852055662,
      "address": "Supermart, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-09T22:00:00.410Z",
    "createdAt": "2024-03-09T22:00:00.410Z",
    "updatedAt": "2024-03-09T22:00:00.410Z",
    "products": [
      {
        "id": "prod_887451",
        "inspectionId": "insp_679010",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_887451_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-09T22:00:00.410Z",
        "updatedAt": "2024-03-09T22:00:00.410Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_887451_1",
        "inspectionId": "insp_679010",
        "productId": "prod_887451",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-09T22:00:00.410Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_721258",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 103",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.557831230782764,
      "longitude": 88.4689982558907,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-22T08:56:53.917Z",
    "createdAt": "2024-03-22T08:56:53.917Z",
    "updatedAt": "2024-03-22T08:56:53.917Z",
    "products": [
      {
        "id": "prod_706891",
        "inspectionId": "insp_721258",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_706891_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-22T08:56:53.917Z",
        "updatedAt": "2024-03-22T08:56:53.917Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_706891_1",
        "inspectionId": "insp_721258",
        "productId": "prod_706891",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-22T08:56:53.917Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_099784",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 104",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.556241236769615,
      "longitude": 88.46025482547529,
      "address": "Wholesale Market, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-15T07:57:24.530Z",
    "completedAt": "2024-02-15T08:27:24.530Z",
    "syncedAt": "2024-02-15T08:32:24.530Z",
    "createdAt": "2024-02-15T07:57:24.530Z",
    "updatedAt": "2024-02-15T07:57:24.530Z",
    "products": [
      {
        "id": "prod_153059",
        "inspectionId": "insp_099784",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_153059_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_457344",
              "inspectionId": "insp_099784",
              "productId": "prod_153059",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "mrp",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T07:57:24.530Z",
              "updatedAt": "2024-02-15T07:57:24.530Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-15T07:57:24.530Z",
        "updatedAt": "2024-02-15T07:57:24.530Z"
      }
    ],
    "violations": [
      {
        "id": "viol_457344",
        "inspectionId": "insp_099784",
        "productId": "prod_153059",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "mrp",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T07:57:24.530Z",
        "updatedAt": "2024-02-15T07:57:24.530Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_153059_1",
        "inspectionId": "insp_099784",
        "productId": "prod_153059",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-15T07:57:24.530Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_353901",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 105",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.53891066779942,
      "longitude": 88.35616416999038,
      "address": "Connaught Place, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-07T05:23:29.261Z",
    "completedAt": "2024-01-07T05:53:29.261Z",
    "syncedAt": "2024-01-07T05:58:29.261Z",
    "createdAt": "2024-01-07T05:23:29.261Z",
    "updatedAt": "2024-01-07T05:23:29.261Z",
    "products": [
      {
        "id": "prod_964091",
        "inspectionId": "insp_353901",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_964091_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-07T05:23:29.261Z",
        "updatedAt": "2024-01-07T05:23:29.261Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_964091_1",
        "inspectionId": "insp_353901",
        "productId": "prod_964091",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-07T05:23:29.261Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_625591",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 106",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.500793398638105,
      "longitude": 88.38037169766416,
      "address": "Wholesale Market, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-19T04:02:42.150Z",
    "completedAt": "2024-03-19T04:32:42.150Z",
    "syncedAt": "2024-03-19T04:37:42.150Z",
    "createdAt": "2024-03-19T04:02:42.150Z",
    "updatedAt": "2024-03-19T04:02:42.150Z",
    "products": [
      {
        "id": "prod_853714",
        "inspectionId": "insp_625591",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_853714_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-19T04:02:42.150Z",
        "updatedAt": "2024-03-19T04:02:42.150Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_853714_1",
        "inspectionId": "insp_625591",
        "productId": "prod_853714",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-19T04:02:42.150Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_362595",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 107",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.572630069826246,
      "longitude": 88.37527933936114,
      "address": "Sadar Bazaar, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2023-12-25T20:52:20.588Z",
    "createdAt": "2023-12-25T20:52:20.588Z",
    "updatedAt": "2023-12-25T20:52:20.588Z",
    "products": [
      {
        "id": "prod_450385",
        "inspectionId": "insp_362595",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_450385_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-25T20:52:20.588Z",
        "updatedAt": "2023-12-25T20:52:20.588Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_450385_1",
        "inspectionId": "insp_362595",
        "productId": "prod_450385",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-25T20:52:20.588Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_154694",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 108",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.573992705374568,
      "longitude": 88.35955211126878,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-01-18T04:42:37.620Z",
    "completedAt": "2024-01-18T05:12:37.620Z",
    "syncedAt": "2024-01-18T05:17:37.620Z",
    "createdAt": "2024-01-18T04:42:37.620Z",
    "updatedAt": "2024-01-18T04:42:37.620Z",
    "products": [
      {
        "id": "prod_264071",
        "inspectionId": "insp_154694",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_264071_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_173125",
              "inspectionId": "insp_154694",
              "productId": "prod_264071",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-01-18T04:42:37.620Z",
              "updatedAt": "2024-01-18T04:42:37.620Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-18T04:42:37.620Z",
        "updatedAt": "2024-01-18T04:42:37.620Z"
      }
    ],
    "violations": [
      {
        "id": "viol_173125",
        "inspectionId": "insp_154694",
        "productId": "prod_264071",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-01-18T04:42:37.620Z",
        "updatedAt": "2024-01-18T04:42:37.620Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_264071_1",
        "inspectionId": "insp_154694",
        "productId": "prod_264071",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-18T04:42:37.620Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_010821",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 109",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.57497604559326,
      "longitude": 88.3972755818271,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-03T00:21:13.309Z",
    "completedAt": "2024-02-03T00:51:13.309Z",
    "syncedAt": "2024-02-03T00:56:13.309Z",
    "createdAt": "2024-02-03T00:21:13.309Z",
    "updatedAt": "2024-02-03T00:21:13.309Z",
    "products": [
      {
        "id": "prod_774184",
        "inspectionId": "insp_010821",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_774184_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-03T00:21:13.309Z",
        "updatedAt": "2024-02-03T00:21:13.309Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_774184_1",
        "inspectionId": "insp_010821",
        "productId": "prod_774184",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-03T00:21:13.309Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_638413",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 110",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.572073131558945,
      "longitude": 88.41399788388917,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2023-12-31T12:14:54.397Z",
    "completedAt": "2023-12-31T12:44:54.397Z",
    "syncedAt": "2023-12-31T12:49:54.397Z",
    "createdAt": "2023-12-31T12:14:54.397Z",
    "updatedAt": "2023-12-31T12:14:54.397Z",
    "products": [
      {
        "id": "prod_468404",
        "inspectionId": "insp_638413",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_468404_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2023-12-31T12:14:54.397Z",
        "updatedAt": "2023-12-31T12:14:54.397Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_468404_1",
        "inspectionId": "insp_638413",
        "productId": "prod_468404",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2023-12-31T12:14:54.397Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_652837",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Connaught Place Store 111",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.584812589836567,
      "longitude": 88.405828377005,
      "address": "Connaught Place, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-03-19T11:14:29.873Z",
    "completedAt": "2024-03-19T11:44:29.873Z",
    "syncedAt": "2024-03-19T11:49:29.873Z",
    "createdAt": "2024-03-19T11:14:29.873Z",
    "updatedAt": "2024-03-19T11:14:29.873Z",
    "products": [
      {
        "id": "prod_789788",
        "inspectionId": "insp_652837",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_789788_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_327839",
              "inspectionId": "insp_652837",
              "productId": "prod_789788",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-19T11:14:29.873Z",
              "updatedAt": "2024-03-19T11:14:29.873Z"
            },
            {
              "id": "viol_694377",
              "inspectionId": "insp_652837",
              "productId": "prod_789788",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "manufacturerAddress",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-03-19T11:14:29.873Z",
              "updatedAt": "2024-03-19T11:14:29.873Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-19T11:14:29.873Z",
        "updatedAt": "2024-03-19T11:14:29.873Z"
      }
    ],
    "violations": [
      {
        "id": "viol_327839",
        "inspectionId": "insp_652837",
        "productId": "prod_789788",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-19T11:14:29.873Z",
        "updatedAt": "2024-03-19T11:14:29.873Z"
      },
      {
        "id": "viol_694377",
        "inspectionId": "insp_652837",
        "productId": "prod_789788",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "manufacturerAddress",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-03-19T11:14:29.873Z",
        "updatedAt": "2024-03-19T11:14:29.873Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_789788_1",
        "inspectionId": "insp_652837",
        "productId": "prod_789788",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-19T11:14:29.873Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_741176",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Local Kirana Store 112",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.583688200567213,
      "longitude": 88.40077002772732,
      "address": "Local Kirana, Salt Lake, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Salt Lake",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-14T17:04:58.206Z",
    "completedAt": "2024-02-14T17:34:58.206Z",
    "syncedAt": "2024-02-14T17:39:58.206Z",
    "createdAt": "2024-02-14T17:04:58.206Z",
    "updatedAt": "2024-02-14T17:04:58.206Z",
    "products": [
      {
        "id": "prod_667051",
        "inspectionId": "insp_741176",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_667051_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-14T17:04:58.206Z",
        "updatedAt": "2024-02-14T17:04:58.206Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_667051_1",
        "inspectionId": "insp_741176",
        "productId": "prod_667051",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-14T17:04:58.206Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_355816",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 113",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.552033318986147,
      "longitude": 88.4792610404139,
      "address": "Supermart, New Town, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "New Town",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-15T22:45:32.973Z",
    "completedAt": "2024-02-15T23:15:32.973Z",
    "syncedAt": "2024-02-15T23:20:32.973Z",
    "createdAt": "2024-02-15T22:45:32.973Z",
    "updatedAt": "2024-02-15T22:45:32.973Z",
    "products": [
      {
        "id": "prod_680558",
        "inspectionId": "insp_355816",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-101",
        "brandName": "Kurkure",
        "declarationFields": {
          "productName": "Kurkure Item",
          "manufacturer": "Kurkure",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_680558_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_495116",
              "inspectionId": "insp_355816",
              "productId": "prod_680558",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T22:45:32.973Z",
              "updatedAt": "2024-02-15T22:45:32.973Z"
            },
            {
              "id": "viol_750594",
              "inspectionId": "insp_355816",
              "productId": "prod_680558",
              "ruleId": "RULE_DEMO_002",
              "ruleVersion": "1.0",
              "fieldName": "bestBefore",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T22:45:32.973Z",
              "updatedAt": "2024-02-15T22:45:32.973Z"
            },
            {
              "id": "viol_638902",
              "inspectionId": "insp_355816",
              "productId": "prod_680558",
              "ruleId": "RULE_DEMO_003",
              "ruleVersion": "1.0",
              "fieldName": "customerCare",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "HIGH",
              "inspectorVerified": true,
              "createdAt": "2024-02-15T22:45:32.973Z",
              "updatedAt": "2024-02-15T22:45:32.973Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-15T22:45:32.973Z",
        "updatedAt": "2024-02-15T22:45:32.973Z"
      }
    ],
    "violations": [
      {
        "id": "viol_495116",
        "inspectionId": "insp_355816",
        "productId": "prod_680558",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T22:45:32.973Z",
        "updatedAt": "2024-02-15T22:45:32.973Z"
      },
      {
        "id": "viol_750594",
        "inspectionId": "insp_355816",
        "productId": "prod_680558",
        "ruleId": "RULE_DEMO_002",
        "ruleVersion": "1.0",
        "fieldName": "bestBefore",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T22:45:32.973Z",
        "updatedAt": "2024-02-15T22:45:32.973Z"
      },
      {
        "id": "viol_638902",
        "inspectionId": "insp_355816",
        "productId": "prod_680558",
        "ruleId": "RULE_DEMO_003",
        "ruleVersion": "1.0",
        "fieldName": "customerCare",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "HIGH",
        "inspectorVerified": true,
        "createdAt": "2024-02-15T22:45:32.973Z",
        "updatedAt": "2024-02-15T22:45:32.973Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_680558_1",
        "inspectionId": "insp_355816",
        "productId": "prod_680558",
        "localFilePath": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-15T22:45:32.973Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_700950",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 114",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.590210260369204,
      "longitude": 88.36800587710171,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-01-02T22:49:02.825Z",
    "completedAt": "2024-01-02T23:19:02.825Z",
    "syncedAt": "2024-01-02T23:24:02.825Z",
    "createdAt": "2024-01-02T22:49:02.825Z",
    "updatedAt": "2024-01-02T22:49:02.825Z",
    "products": [
      {
        "id": "prod_839500",
        "inspectionId": "insp_700950",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_839500_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-01-02T22:49:02.825Z",
        "updatedAt": "2024-01-02T22:49:02.825Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_839500_1",
        "inspectionId": "insp_700950",
        "productId": "prod_839500",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-01-02T22:49:02.825Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_642108",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 115",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.498563762480337,
      "longitude": 88.34434486546687,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-04T10:36:04.811Z",
    "completedAt": "2024-02-04T11:06:04.811Z",
    "syncedAt": "2024-02-04T11:11:04.811Z",
    "createdAt": "2024-02-04T10:36:04.811Z",
    "updatedAt": "2024-02-04T10:36:04.811Z",
    "products": [
      {
        "id": "prod_717615",
        "inspectionId": "insp_642108",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-FIR-101",
        "brandName": "First Crop",
        "declarationFields": {
          "productName": "First Crop Item",
          "manufacturer": "First Crop",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_717615_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-04T10:36:04.811Z",
        "updatedAt": "2024-02-04T10:36:04.811Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_717615_1",
        "inspectionId": "insp_642108",
        "productId": "prod_717615",
        "localFilePath": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-04T10:36:04.811Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_206929",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 116",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.574860847783697,
      "longitude": 88.35085402602205,
      "address": "Supermart, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "IN_PROGRESS",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-02-20T19:42:12.644Z",
    "createdAt": "2024-02-20T19:42:12.644Z",
    "updatedAt": "2024-02-20T19:42:12.644Z",
    "products": [
      {
        "id": "prod_654534",
        "inspectionId": "insp_206929",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_654534_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-20T19:42:12.644Z",
        "updatedAt": "2024-02-20T19:42:12.644Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_654534_1",
        "inspectionId": "insp_206929",
        "productId": "prod_654534",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-20T19:42:12.644Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_292624",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Sadar Bazaar Store 117",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.50911892119396,
      "longitude": 88.3407452173423,
      "address": "Sadar Bazaar, Gariahat, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Gariahat",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-16T11:38:34.719Z",
    "completedAt": "2024-03-16T12:08:34.719Z",
    "syncedAt": "2024-03-16T12:13:34.719Z",
    "createdAt": "2024-03-16T11:38:34.719Z",
    "updatedAt": "2024-03-16T11:38:34.719Z",
    "products": [
      {
        "id": "prod_019263",
        "inspectionId": "insp_292624",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_019263_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-16T11:38:34.719Z",
        "updatedAt": "2024-03-16T11:38:34.719Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_019263_1",
        "inspectionId": "insp_292624",
        "productId": "prod_019263",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-16T11:38:34.719Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_844517",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Supermart Store 118",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.563741894381423,
      "longitude": 88.35642415434033,
      "address": "Supermart, Park Street, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Park Street",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "FAIL",
    "startedAt": "2024-02-28T04:02:22.912Z",
    "completedAt": "2024-02-28T04:32:22.912Z",
    "syncedAt": "2024-02-28T04:37:22.912Z",
    "createdAt": "2024-02-28T04:02:22.912Z",
    "updatedAt": "2024-02-28T04:02:22.912Z",
    "products": [
      {
        "id": "prod_029159",
        "inspectionId": "insp_844517",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_029159_1"
        ],
        "complianceResult": {
          "decision": "FAIL",
          "score": 40,
          "violations": [
            {
              "id": "viol_227232",
              "inspectionId": "insp_844517",
              "productId": "prod_029159",
              "ruleId": "RULE_DEMO_001",
              "ruleVersion": "1.0",
              "fieldName": "netQuantity",
              "observedValue": "Missing or illegible",
              "expectedValue": "Clear declaration",
              "confidence": 0.95,
              "severity": "LOW",
              "inspectorVerified": true,
              "createdAt": "2024-02-28T04:02:22.912Z",
              "updatedAt": "2024-02-28T04:02:22.912Z"
            }
          ]
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-02-28T04:02:22.912Z",
        "updatedAt": "2024-02-28T04:02:22.912Z"
      }
    ],
    "violations": [
      {
        "id": "viol_227232",
        "inspectionId": "insp_844517",
        "productId": "prod_029159",
        "ruleId": "RULE_DEMO_001",
        "ruleVersion": "1.0",
        "fieldName": "netQuantity",
        "observedValue": "Missing or illegible",
        "expectedValue": "Clear declaration",
        "confidence": 0.95,
        "severity": "LOW",
        "inspectorVerified": true,
        "createdAt": "2024-02-28T04:02:22.912Z",
        "updatedAt": "2024-02-28T04:02:22.912Z"
      }
    ],
    "images": [
      {
        "id": "img_prod_029159_1",
        "inspectionId": "insp_844517",
        "productId": "prod_029159",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-02-28T04:02:22.912Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_804773",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Wholesale Market Store 119",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.581791662913194,
      "longitude": 88.35524336815574,
      "address": "Wholesale Market, Burrabazar, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Burrabazar",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-23T04:29:20.377Z",
    "completedAt": "2024-03-23T04:59:20.377Z",
    "syncedAt": "2024-03-23T05:04:20.377Z",
    "createdAt": "2024-03-23T04:29:20.377Z",
    "updatedAt": "2024-03-23T04:29:20.377Z",
    "products": [
      {
        "id": "prod_101014",
        "inspectionId": "insp_804773",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-PIL-101",
        "brandName": "Pillsbury",
        "declarationFields": {
          "productName": "Pillsbury Item",
          "manufacturer": "Pillsbury",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800-123-4567",
          "mrp": "100.00",
          "netQuantity": "500g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_101014_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-23T04:29:20.377Z",
        "updatedAt": "2024-03-23T04:29:20.377Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_101014_1",
        "inspectionId": "insp_804773",
        "productId": "prod_101014",
        "localFilePath": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "remoteUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        "imageType": "front",
        "capturedAt": "2024-03-23T04:29:20.377Z",
        "qualityScore": 0.9,
        "uploaded": true
      }
    ]
  },
  {
    "id": "insp_765439",
    "officerId": "demo_analytics_officer_001",
    "shopName": "[DEMO] Ration store",
    "shopOwnerName": "Demo Owner",
    "shopCategory": "Retail",
    "location": {
      "latitude": 22.5726,
      "longitude": 88.3639,
      "address": "Ration store, Kolkata",
      "city": "Kolkata",
      "state": "West Bengal",
      "district": "Kolkata",
      "accuracyMeters": 10
    },
    "status": "COMPLETED",
    "syncStatus": "synced",
    "overallResult": "PASS",
    "startedAt": "2024-03-24T09:50:00.000Z",
    "completedAt": "2024-03-24T10:00:00.000Z",
    "syncedAt": "2024-03-24T10:00:00.000Z",
    "createdAt": "2024-03-24T10:00:00.000Z",
    "updatedAt": "2024-03-24T10:00:00.000Z",
    "products": [
      {
        "id": "prod_885589",
        "inspectionId": "insp_765439",
        "category": "Food & Beverages",
        "barcodeOrGtin": "SKU-KUR-MASALA-135G",
        "brandName": "Kurkure Masala Munch",
        "declarationFields": {
          "productName": "Kurkure Masala Munch",
          "manufacturer": "PEPSICO INDIA HOLDINGS PVT. LTD.",
          "countryOfOrigin": "India",
          "manufacturingDate": "2023-01-01",
          "consumerCare": "1800 22 4020, consumer.feedback@pepsico.com",
          "mrp": "30.00",
          "netQuantity": "135 g"
        },
        "status": "VERIFIED",
        "imageIds": [
          "img_prod_885589_1"
        ],
        "complianceResult": {
          "decision": "PASS",
          "score": 100,
          "violations": []
        },
        "verifiedByOfficer": true,
        "createdAt": "2024-03-24T10:00:00.000Z",
        "updatedAt": "2024-03-24T10:00:00.000Z"
      }
    ],
    "violations": [],
    "images": [
      {
        "id": "img_prod_885589_1",
        "inspectionId": "insp_765439",
        "productId": "prod_885589",
        "localFilePath": "https://m.media-amazon.com/images/I/71YtQn49rLL.jpg",
        "remoteUrl": "https://m.media-amazon.com/images/I/71YtQn49rLL.jpg",
        "imageType": "back",
        "capturedAt": "2024-03-24T10:00:00.000Z",
        "qualityScore": 1,
        "uploaded": true
      }
    ]
  }
];
