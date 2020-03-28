export interface Budget {
  id: string;
  name: string;
  startingAmount: number;
  startDate: string;
  lineItems: LineItem[];
}

export interface LineItem {
  id: string;
  title: string;
  budgetID: string;
  dayOfMonth?: number;
  scheduleTypeId: string;
  amount: number;
}

export interface ScheduleType {
  id: string;
  dayOfMonth: number;
  dayOfWeek: string;
  frequency: Frequency;
}

enum Frequency {
  "OneTime",
  "Daily",
  "Weekly",
  "Bi-Weekly",
  "Monthly"
}

export const budgets: Budget[] = [
  {
    id: "1",
    name: "Default",
    startingAmount: 600,
    startDate: "2/2/2020",
    lineItems: []
  }
];
