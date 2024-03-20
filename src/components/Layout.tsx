// Layout.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
    title: string;
    description: string | null;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                {!!description && description != null &&
                    <meta name="description" content={description} />
                }
            </Helmet>
            {children}
        </>
    );
};

export default Layout;