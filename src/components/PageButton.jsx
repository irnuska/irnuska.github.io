import React from "react";

export default function PageButton({ active, children }) {
    return children.filter(child => child.props.name == active)
}