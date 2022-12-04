import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { greeting } from "../../portfolio";
import './Greeting.css'

const Greeting = () => {
    const { name, role, description, resume, social } = greeting

    return (
        <div className='greeting center'>
            {name && (
                <h1>
                    Hi, I am <span className='greeting__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='greeting__role'>A {role}.</h2>}
            <p className='greeting__desc'>{description && description}</p>

            <div className='greeting__contact center'>
                {resume && (
                    <a href={resume}>
                        <span type='button' className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Greeting;