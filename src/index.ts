import type { AlertProps } from './components/Alert';
import type { BadgeProps } from './components/Badge';
import type { BootstrapElementProps } from './components/BootstrapElement';
import type { ButtonProps } from './components/Button';
import type { CardProps } from './components/Card';
import type { ComponentLabItem, ComponentLabProps } from './components/ComponentLab';
import type { DropdownItemProps, DropdownProps } from './components/Dropdown';
import type { FormInputProps } from './components/FormInput';
import type { ColProps, ContainerProps, RowProps } from './components/Layout';
import type { ModalProps } from './components/Modal';
import type { NavItemProps, NavLinkProps, NavProps } from './components/Nav';
import type { NavbarBrandProps, NavbarProps, NavbarTextProps } from './components/Navbar';
import type { OffcanvasProps } from './components/Offcanvas';
import type { TableProps } from './components/Table';

export { Alert, type AlertProps } from './components/Alert';
export { Badge, type BadgeProps } from './components/Badge';
export { BootstrapElement, type BootstrapElementProps } from './components/BootstrapElement';
export { Button, type ButtonProps, type ButtonSize, type ButtonVariant } from './components/Button';
export { Card, type CardProps } from './components/Card';
export { ComponentLab, type ComponentLabItem, type ComponentLabProps } from './components/ComponentLab';
export { Dropdown, DropdownItem, type DropdownItemProps, type DropdownProps } from './components/Dropdown';
export { FormInput, type FormInputProps } from './components/FormInput';
export { Col, Container, Row, type ColProps, type ContainerProps, type RowProps } from './components/Layout';
export { Modal, type ModalProps } from './components/Modal';
export { Nav, NavItem, NavLink, type NavItemProps, type NavLinkProps, type NavProps } from './components/Nav';
export {
    Navbar,
    NavbarBrand,
    NavbarText,
    type NavbarBrandProps,
    type NavbarProps,
    type NavbarTextProps
} from './components/Navbar';
export { Offcanvas, type OffcanvasPlacement, type OffcanvasProps } from './components/Offcanvas';
export { Table, type TableProps } from './components/Table';

// RS-prefixed aliases for consistent design system naming.
export { Alert as RSAlert } from './components/Alert';
export { Badge as RSBadge } from './components/Badge';
export { BootstrapElement as RSBootstrapElement } from './components/BootstrapElement';
export { Button as RSButton } from './components/Button';
export { Card as RSCard } from './components/Card';
export { ComponentLab as RSComponentLab } from './components/ComponentLab';
export { Dropdown as RSDropdown, DropdownItem as RSDropdownItem } from './components/Dropdown';
export { FormInput as RSTextBox, FormInput as RSFormInput } from './components/FormInput';
export { Col as RSCol, Container as RSContainer, Row as RSRow } from './components/Layout';
export { Modal as RSModal } from './components/Modal';
export { Nav as RSNav, NavItem as RSNavItem, NavLink as RSNavLink } from './components/Nav';
export { Navbar as RSNavbar, NavbarBrand as RSNavbarBrand, NavbarText as RSNavbarText } from './components/Navbar';
export { Offcanvas as RSOffcanvas } from './components/Offcanvas';
export { Table as RSTable } from './components/Table';

export type RSAlertProps = AlertProps;
export type RSBadgeProps = BadgeProps;
export type RSBootstrapElementProps<T extends keyof import('react').JSX.IntrinsicElements> = BootstrapElementProps<T>;
export type RSButtonProps = ButtonProps;
export type RSCardProps = CardProps;
export type RSComponentLabItem = ComponentLabItem;
export type RSComponentLabProps = ComponentLabProps;
export type RSDropdownProps = DropdownProps;
export type RSDropdownItemProps = DropdownItemProps;
export type RSTextBoxProps = FormInputProps;
export type RSFormInputProps = FormInputProps;
export type RSContainerProps = ContainerProps;
export type RSRowProps = RowProps;
export type RSColProps = ColProps;
export type RSModalProps = ModalProps;
export type RSNavProps = NavProps;
export type RSNavItemProps = NavItemProps;
export type RSNavLinkProps = NavLinkProps;
export type RSNavbarProps = NavbarProps;
export type RSNavbarBrandProps = NavbarBrandProps;
export type RSNavbarTextProps = NavbarTextProps;
export type RSOffcanvasProps = OffcanvasProps;
export type RSTableProps = TableProps;
