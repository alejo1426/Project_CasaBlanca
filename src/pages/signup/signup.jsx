import React from 'react';
import * as Components from './components';

function Signup() {
    const [signIn, setSignIn] = React.useState(true);
    
    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input className='' type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Input type='Number' placeholder='Number Phone' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input className='datos' type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button className='datos'>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => setSignIn(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start your journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => setSignIn(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Signup;
