import { Badge } from './Badge';
import { InspectionStatus } from '@nyayalabel/shared';
import { ComplianceDecision } from '@nyayalabel/shared';

export function StatusBadge({ status }: { status: InspectionStatus | ComplianceDecision | string }) {
  let variant: 'default' | 'success' | 'warning' | 'danger' | 'outline' = 'default';
  let label = status;

  switch (status) {
    case 'COMPLETED':
    case 'PASS':
    case 'COMPLIANT':
      variant = 'success';
      label = status === 'PASS' ? 'COMPLIANT' : status;
      break;
    case 'IN_PROGRESS':
    case 'DRAFT':
    case 'PENDING':
      variant = 'warning';
      break;
    case 'FLAGGED':
    case 'FAIL':
    case 'NON_COMPLIANT':
    case 'NON-COMPLIANT':
      variant = 'danger';
      label = status === 'FAIL' ? 'NON-COMPLIANT' : status;
      break;
    case 'REVIEW':
    case 'REVIEWED':
      variant = 'warning';
      break;
    default:
      variant = 'default';
  }

  return <Badge variant={variant}>{label}</Badge>;
}
