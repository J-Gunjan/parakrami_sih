import { Inspection, ComplianceRule, Officer, InspectionSummary } from '@nyayalabel/shared';

// MOCK DATA

export const mockOfficers: Officer[] = [
  {
    id: 'off_001',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@legalmetrology.gov.in',
    badgeNumber: 'LM-RJ-1042',
    jurisdiction: 'Jaipur Central',
    role: 'INSPECTOR',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'off_admin',
    name: 'Admin User',
    email: 'admin@legalmetrology.gov.in',
    badgeNumber: 'ADMIN-001',
    jurisdiction: 'National',
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const mockInspections: Inspection[] = [
  {
    id: 'insp_1001',
    officerId: 'off_001',
    shopName: 'Sharma Provisions',
    location: {
      latitude: 26.9124,
      longitude: 75.7873,
      address: 'Plot 42, Malviya Nagar, Jaipur',
    },
    status: 'COMPLETED',
    syncStatus: 'synced',
    overallResult: 'FAIL',
    startedAt: new Date(Date.now() - 86400000).toISOString(),
    completedAt: new Date(Date.now() - 85000000).toISOString(),
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 85000000).toISOString(),
    products: [
      {
        id: 'prod_001',
        inspectionId: 'insp_1001',
        category: 'PACKAGED_FOOD',
        barcodeOrGtin: '8901234567890',
        declarationFields: {
          productName: 'Sample Product',
          manufacturer: 'Sample Manufacturer',
          countryOfOrigin: 'India',
          netQuantity: '500g',
          mrp: '₹120',
          manufacturingDate: '2023-01-01',
          consumerCare: 'care@sample.com'
        },
        extractedDeclarations: {
          netQuantity: { value: '500g', confidence: 0.95, isVerifiedByInspector: false },
          mrp: { value: '₹120', confidence: 0.88, isVerifiedByInspector: false },
        },
        status: 'FLAGGED',
        complianceResult: {
          decision: 'FAIL',
          score: 40,
          violations: []
        },
        imageIds: ['img_001'],
        verifiedByOfficer: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    violations: [
      {
        id: 'viol_001',
        inspectionId: 'insp_1001',
        productId: 'prod_001',
        ruleId: 'rule_net_qty_font',
        ruleVersion: '1.0',
        fieldName: 'Net Quantity',
        observedValue: 'Font height 2mm',
        expectedValue: 'Min font height 4mm',
        confidence: 0.95,
        severity: 'HIGH',
        inspectorVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    images: [
      {
        id: 'img_001',
        inspectionId: 'insp_1001',
        productId: 'prod_001',
        localFilePath: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=800&q=80',
        remoteUrl: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=800&q=80',
        imageType: 'front',
        capturedAt: new Date().toISOString(),
        qualityScore: 0.9,
        uploaded: true
      }
    ]
  },
  {
    id: 'insp_1002',
    officerId: 'off_001',
    shopName: 'Metro Supermarket',
    location: {
      latitude: 26.9150,
      longitude: 75.7900,
      address: 'C-Scheme, Jaipur',
    },
    status: 'COMPLETED',
    syncStatus: 'synced',
    overallResult: 'PASS',
    startedAt: new Date(Date.now() - 172800000).toISOString(),
    completedAt: new Date(Date.now() - 171000000).toISOString(),
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 171000000).toISOString(),
    products: []
  }
];

export const mockRules: ComplianceRule[] = [
  {
    ruleId: 'rule_net_qty_font',
    ruleCode: 'NET_QTY_MIN_HEIGHT',
    title: 'Net Quantity Minimum Font Height',
    description: 'The height of any numeral in the declaration of net quantity shall not be less than 4mm for packages > 200g',
    version: '1.0',
    effectiveFrom: '2011-04-01',
    applicableCommodity: 'ALL',
    requirement: 'Numeral height >= 4mm',
    severity: 'HIGH',
    sourceAct: 'Legal Metrology Act, 2009',
    sourceRule: 'Rule 7, LM (Packaged Commodities) Rules, 2011',
    verificationStatus: 'VERIFIED',
    category: 'FONT_SIZE',
    isActive: true,
  }
];

// SERVICES

export const inspectionService = {
  getInspections: async (): Promise<InspectionSummary[]> => {
    const res = await fetch('/api/dashboard/inspections');
    if (!res.ok) throw new Error('Failed to fetch inspections');
    return res.json();
  },
  
  getInspectionById: async (id: string): Promise<Inspection | undefined> => {
    const res = await fetch(`/api/dashboard/inspections/${id}`);
    if (!res.ok) throw new Error('Failed to fetch inspection');
    return res.json();
  },

  overrideResult: async (id: string, newResult: 'PASS' | 'FAIL' | 'REVIEW', reason: string): Promise<boolean> => {
    // In a real app this would call the API.
    // For mock, we'll just mutate our memory array.
    const insp = mockInspections.find(i => i.id === id);
    if (insp) {
      insp.overallResult = newResult;
      // Add to audit trail in real app...
      if(!insp.notes) insp.notes = '';
      insp.notes += `\n[REVIEWER OVERRIDE]: Changed to ${newResult}. Reason: ${reason}`;
      return true;
    }
    return false;
  }
};

export const ruleService = {
  getRules: async (): Promise<ComplianceRule[]> => {
    return mockRules;
  },
  
  createRuleVersion: async (ruleId: string, updates: Partial<ComplianceRule>): Promise<ComplianceRule> => {
    const existing = mockRules.find(r => r.ruleId === ruleId);
    if (!existing) throw new Error('Rule not found');
    
    // Deactivate old rule
    existing.isActive = false;
    existing.effectiveUntil = new Date().toISOString();

    // Create new version
    const newVersionNum = (parseFloat(existing.version) + 1).toFixed(1);
    const newRule: ComplianceRule = {
      ...existing,
      ...updates,
      ruleId: `${existing.ruleCode.toLowerCase()}_v${newVersionNum}`,
      version: newVersionNum,
      effectiveFrom: new Date().toISOString(),
      effectiveUntil: null,
      isActive: true,
    };
    
    mockRules.push(newRule);
    return newRule;
  }
};

export const officerService = {
  getOfficers: async (): Promise<Officer[]> => {
    return mockOfficers;
  }
};

export const authService = {
  login: async (email: string, _password: string): Promise<{ token: string, user: Officer }> => {
    // Mock login
    const user = mockOfficers.find(o => o.email === email) || mockOfficers[1]; // default to admin
    return {
      token: 'mock-jwt-token',
      user
    };
  }
};
