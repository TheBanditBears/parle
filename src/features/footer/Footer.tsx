import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

export function Footer() {
    return (
    <div className='footer'>

        <p id='footer-top'>Made with love by Sarah and Niloy.</p>
        <span >
        <span id='black-text'>
           <CopyrightIcon/> Copywright all rights reserved.
        </span>
          <a
            id='github black-text'
            href="https://github.com/orgs/TheBanditBears/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon/>
          </a>
        </span>

    </div>
    )
  }
