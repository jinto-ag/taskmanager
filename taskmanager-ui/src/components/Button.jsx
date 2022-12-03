import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Button = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius,
}));
