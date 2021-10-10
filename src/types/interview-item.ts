type ItemTypeProps = {
  type?: "interview";
  detail: string;
  created: string;
  createdBy: string;
  expired: string;
  assignedBy: string;
  candidates: number;
  response: number;
  analysed: number;
  shortlisted: number;
  status: boolean;
};

export type InterviewItem = ItemTypeProps;
