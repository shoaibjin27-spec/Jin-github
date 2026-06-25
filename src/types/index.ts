export interface Workflow {
  id: string;
  name: string;
  active: boolean;
  nodes: any[];
  connections: any[];
  createdAt: string;
  updatedAt: string;
}

export interface ExecutionResult {
  id: string;
  workflowId: string;
  status: 'success' | 'error' | 'running';
  startTime: string;
  endTime?: string;
  data?: any;
  error?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
