import { MenuComponent } from '../menu/menu.component';
export declare class DropmenuComponent {
    menus: MenuComponent[];
    isOpen: boolean;
    select(menu: MenuComponent): void;
    close(): void;
    addMenu(menu: MenuComponent): void;
}
