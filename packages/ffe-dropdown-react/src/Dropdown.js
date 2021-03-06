import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

const Dropdown = props => {
    const { className, inline, ...rest } = props;

    return (
        <select
            className={classNames(
                'ffe-dropdown',
                { 'ffe-dropdown--inline': inline },
                className,
            )}
            {...rest}
        />
    );
};

Dropdown.propTypes = {
    children: node,
    inline: bool,
    className: string,
};

export default Dropdown;
