import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    RSAlert,
    RSBadge,
    RSButton,
    RSCard,
    RSComponentLab,
    RSContainer,
    RSDropdown,
    RSDropdownItem,
    RSModal,
    RSNav,
    RSNavItem,
    RSNavLink,
    RSNavbar,
    RSNavbarBrand,
    RSNavbarText,
    RSOffcanvas,
    RSTable,
    RSTextBox,
    type RSComponentLabItem
} from '../index';

function LabDemo() {
    const [showModal, setShowModal] = React.useState(false);
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const items: RSComponentLabItem[] = [
        {
            id: 'buttons',
            title: 'Buttons and Badge',
            description: 'Verify variants, loading state, and inline status elements.',
            component: (
                <div className="d-flex flex-wrap gap-2 align-items-center">
                    <RSButton variant="primary">Primary</RSButton>
                    <RSButton variant="outline-secondary">Outline</RSButton>
                    <RSButton variant="success" loading loadingText="Saving...">
                        Save
                    </RSButton>
                    <RSBadge variant="success">Ready</RSBadge>
                </div>
            )
        },
        {
            id: 'textbox',
            title: 'Text Box',
            description: 'Check labels, help text, validation, and native input props.',
            component: (
                <div>
                    <RSTextBox label="Email" placeholder="name@company.com" helpText="Used for account updates." />
                    <RSTextBox label="Password" type="password" errorText="Password is required." />
                </div>
            )
        },
        {
            id: 'alert-card',
            title: 'Alert and Card',
            description: 'Validate content wrappers and dismiss interactions.',
            component: (
                <div className="d-flex flex-column gap-3">
                    <RSAlert variant="success" dismissible>
                        Settings saved successfully.
                    </RSAlert>
                    <RSCard title="Nested Card" body="Cards can also be used inside the lab for layout checks." />
                </div>
            )
        },
        {
            id: 'dropdown',
            title: 'Dropdown',
            description: 'Open the menu and check alignment and item states.',
            component: (
                <RSDropdown label="Actions" align="end">
                    <RSDropdownItem href="#view">View</RSDropdownItem>
                    <RSDropdownItem active href="#edit">Edit</RSDropdownItem>
                    <RSDropdownItem disabled href="#delete">Delete</RSDropdownItem>
                </RSDropdown>
            )
        },
        {
            id: 'overlay',
            title: 'Modal and Offcanvas',
            description: 'Open overlays and confirm close behavior and layout.',
            component: (
                <div className="d-flex flex-wrap gap-2">
                    <RSButton onClick={() => setShowModal(true)}>Open Modal</RSButton>
                    <RSButton variant="outline-primary" onClick={() => setShowOffcanvas(true)}>
                        Open Offcanvas
                    </RSButton>
                    <RSModal
                        show={showModal}
                        title="Test Modal"
                        onClose={() => setShowModal(false)}
                        footer={<RSButton onClick={() => setShowModal(false)}>Close</RSButton>}
                    >
                        Modal content is rendering correctly.
                    </RSModal>
                    <RSOffcanvas show={showOffcanvas} title="Test Panel" onClose={() => setShowOffcanvas(false)}>
                        Offcanvas content is rendering correctly.
                    </RSOffcanvas>
                </div>
            )
        },
        {
            id: 'navigation',
            title: 'Nav and Navbar',
            description: 'Verify navigation styling and container composition.',
            colProps: { md: 12 },
            component: (
                <div className="d-flex flex-column gap-3">
                    <RSNavbar bg="light" theme="light" className="border rounded px-3 py-2">
                        <RSNavbarBrand href="#brand">RS Components</RSNavbarBrand>
                        <RSNavbarText>Testing navbar rendering</RSNavbarText>
                    </RSNavbar>
                    <RSNav variant="tabs">
                        <RSNavItem>
                            <RSNavLink active href="#overview">Overview</RSNavLink>
                        </RSNavItem>
                        <RSNavItem>
                            <RSNavLink href="#props">Props</RSNavLink>
                        </RSNavItem>
                        <RSNavItem>
                            <RSNavLink disabled href="#disabled">Disabled</RSNavLink>
                        </RSNavItem>
                    </RSNav>
                </div>
            )
        },
        {
            id: 'table',
            title: 'Table',
            description: 'Check responsive wrapper, striped rows, and hover state.',
            colProps: { md: 12 },
            component: (
                <RSTable striped hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RSButton</td>
                            <td>Pass</td>
                            <td>Primary and outline variants render.</td>
                        </tr>
                        <tr>
                            <td>RSTextBox</td>
                            <td>Pass</td>
                            <td>Validation and help text render.</td>
                        </tr>
                    </tbody>
                </RSTable>
            )
        }
    ];

    return (
        <RSContainer fluid="lg">
            <RSComponentLab
                title="RS Component Test Lab"
                description="Use this page to add new component examples and verify wrappers before release."
                items={items}
                columns={2}
            />
        </RSContainer>
    );
}

const meta = {
    title: 'Playground/RSComponentLab',
    component: RSComponentLab,
    args: {
        items: []
    },
    tags: ['autodocs']
} satisfies Meta<typeof RSComponentLab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: () => <LabDemo />
};
