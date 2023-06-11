import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip, IconButton } from '@mui/material';

type GithubBtnPrps = {
  color: string;
};

const GitHubBtn = ({ color }: GithubBtnPrps) => {
  return (
    <Tooltip title="Visit My GitHub">
      <IconButton sx={{ p: 0, margin: 'auto' }}>
        <GitHubIcon sx={{ color: color }} />
      </IconButton>
    </Tooltip>
  );
};

export default GitHubBtn;
