import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AboutButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--bg_gradient);
  border: 1px solid var(--border_color_cell);
  color: var(--color_label);
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  z-index: 1000;
  
  &:hover {
    background: var(--color_label);
    color: var(--bg_gradient);
  }
`;

const AboutDialog = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 320px;
  max-height: 70vh;
  background: var(--bg_gradient);
  border: 1px solid var(--border_color_cell);
  border-radius: 8px;
  padding: 20px;
  overflow-y: auto;
  color: var(--color_label);
  font-size: 13px;
  line-height: 1.6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  
  h3 {
    margin: 0 0 12px;
    font-size: 16px;
    color: var(--color_label-highlighted);
  }
  
  p {
    margin: 0 0 10px;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: var(--color_label-highlighted);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .license-box {
    background: var(--border_color_cell);
    padding: 12px;
    border-radius: 4px;
    margin-top: 12px;
    font-family: monospace;
    white-space: pre-wrap;
  }
`;

const AboutContent = styled.div`
  display: none;
`;

interface AboutDialogProps {
  isOpen: boolean;
}

export const AboutDialog: React.FC<AboutDialogProps> = ({ isOpen }) => {
  const { t } = useTranslation();
  const [showDialog, setShowDialog] = useState(isOpen);

  const toggleAbout = () => {
    setShowDialog(!showDialog);
  };

  const licenseText = `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2024 MKKE Contributors
Based on VIA - Copyright (C) 2020-2024 the-via contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

---

MKKE is a fork of VIA (Visual Interface for Architects)
Original project: https://github.com/the-via/app
VIA website: https://usevia.app
`;

  if (!showDialog) {
    return <AboutButton onClick={toggleAbout}>ℹ️ About MKKE</AboutButton>;
  }

  return (
    <AboutDialog>
      <h3>MKKE - Mechanical Keyboard Key Editor</h3>
      <p><strong>Version:</strong> Fork of VIA (Visual Interface for Architects)</p>
      <p><strong>Description:</strong> A web-based interface for configuring QMK-powered mechanical keyboards via WebHID. Customize keymaps, create macros, and adjust RGB settings without recompiling firmware.</p>
      <p><strong>License:</strong> GPL v3</p>
      <p><strong>Original Project:</strong> <a href="https://github.com/the-via/app" target="_blank">VIA (the-via/app)</a></p>
      <p><strong>Website:</strong> <a href="https://usevia.app" target="_blank">usevia.app</a></p>
      <div className="license-box">{licenseText}</div>
    </AboutDialog>
  );
};
