export interface Widget {
  id: string;
  type: "text" | "chart" | "list";
  content: string | string[];
  layout: { i: string; x: number; y: number; w: number; h: number };
}
