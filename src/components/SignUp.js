import { Modal } from 'bootstrap'
import { useEffect, useRef } from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaGooglePlusSquare,
  FaUserPlus
} from 'react-icons/fa'
import { AiFillAndroid } from 'react-icons/ai'

function Signup () {
  const modal = useRef(null)
  const model = useRef(null)

  useEffect(() => {
    modal.current = new Modal(model.current)
  }, [])

  return (
    <>
      <a
        type='button'
        ref={modal}
        onClick={() => modal.current.show()}
        className=' px-2 link'
      >
        LOGIN
      </a>
      <div
        className='modal fade '
        ref={model}
        tabIndex='-1'
        aria-labelledby='modelLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div
              class='d-flex'
              style={{ backgroundColor: '#FFC0CB', width: '40rem' }}
            >
              <div class='col-md-4 text-center'>
                <p className='text-light font-normal mt-4 '>
                  create a free account today
                </p>
                <p className='text-light font-normal mt-4 '>
                  create your account to continue to access and explore services
                </p>
              </div>

              <div class='col-md-8  ' style={{ backgroundColor: 'white' }}>
                <div className='py-4 mx-4 ml-4'>
                  <button
                    type='button'
                    class='btnn btn-primary border border-dark '
                  >
                    <FaFacebook />
                    Login with facebook
                  </button>
                  <button
                    type='button'
                    class='btnn btn-secondary  border border-dark '
                  >
                    <FaLinkedin /> Login with Linkedln
                  </button>
                  <button
                    type='button'
                    class='btnn btn-danger  border border-dark '
                  >
                    <FaGooglePlusSquare /> Login with Google
                  </button>

                  <form control='' class='form-group'>
                    <div className='d-flex flex-column'>
                      <label className='text-left'>Email</label>

                      <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Username'
                        className='input_field mb-2'
                      />
                      <label className='text-left'>Password</label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='input_field mb-2'
                      />
                      <label className='text-left'>Confirm</label>

                      <input
                        type='confirm'
                        name='confirm'
                        id='confirm'
                        placeholder='confirm'
                        className='input_field mb-2'
                      />
                      <div>
                        <input
                          type='checkbox'
                          name='remember_me'
                          id='remember_me'
                          className='input_field mr-2'
                        />
                        <label for='remember_me' className='terms'>
                          Agree to the terms and condition
                        </label>
                        <label for='remember_me' className='forgot'>
                          Forget Password?
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='d-flex justify-content-between mx-4 mb-2'>
                  <button class='btn btn-success  border border-dark '>
                    <FaUserPlus /> SIGNUP
                  </button>
                  <button class='btn btn-warning  border border-dark '>
                    <AiFillAndroid /> CAPTCHA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
