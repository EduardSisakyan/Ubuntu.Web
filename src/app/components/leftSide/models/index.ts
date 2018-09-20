export interface IMenuItemViewModel {
  name: string;
  path: string;
  icon: string;
  isOpen?: boolean;
  children?: Array<{
    name: string;
    path: string;
  }>;
}
