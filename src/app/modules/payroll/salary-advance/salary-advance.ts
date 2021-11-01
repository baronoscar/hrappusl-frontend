import {SalaryAdvancePaymentStatus} from "./salary-advance-enum";

export class SalaryAdvance {
  id!: number;
  firstName?: string;
  lastName?: string;
  repaymentPlanType?: string;
  amount?: number;
  companyRole?: string;
  reasonForSalaryAdvance?: string;
  status?: string;
  paymentDueDate?: Date;
  salaryAdvancePaymentStatus?:string;
}
