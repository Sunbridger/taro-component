import { PkComponent } from '../button/interface';

export interface PkFabProps extends PkComponent {
    children?: React.ReactNode;
    hoverClass?: string;
    icon?: React.ReactNode;
    zIndex?: number;
    onClick?: (event: CommonEvent) => any;
}
