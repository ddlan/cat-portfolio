import { Card } from '@chakra-ui/react';
import styled from 'styled-components';

export const SCard = styled(Card).attrs({
  border: '1px solid #515151'
})`
    border-radius: 12px;
    background: var(--BG, linear-gradient(180deg, #1F1F1F 0%, #111 100%));
  `;