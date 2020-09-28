import BackButton from '@/components/BackBtn/BackButton'
import PhoneButton from '@/components/PhoneButton/PhoneButton'
import Price from '@/components/price/Price';

import { useUser } from '../../server/lib/hooks';
import Auth from '@/components/auth';

const AuthPage = () => {
const [user] = useUser();
  return (
      <div className="bg">
        <div className="main">
        {!user
          ? 
            <Auth/>
          : 
            <Price/>
        }
        </div>
        <div className="btn_bottom">
        <BackButton />
        <PhoneButton />
        </div>

        <style jsx>{`
            h2 {
              padding: 30px 50px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 10%;s
            }
            form {
              display: flex;
              flex-direction: column;
            }
          `}</style>
      </div>
      
    )
}

export default AuthPage

