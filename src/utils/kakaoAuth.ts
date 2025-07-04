// Kakao SDK 타입 정의
declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Auth: {
        login: (options: {
          success: (authObj: any) => void;
          fail: (err: any) => void;
        }) => void;
        logout: (callback?: () => void) => void;
      };
      API: {
        request: (options: {
          url: string;
          success: (response: any) => void;
          fail: (error: any) => void;
        }) => void;
      };
    };
  }
}

// 카카오 앱 키 (실제 개발 시에는 환경변수로 관리)
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY';

export const initKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_APP_KEY);
    console.log('Kakao SDK initialized');
  }
};

export const loginWithKakao = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!window.Kakao) {
      reject(new Error('Kakao SDK not loaded'));
      return;
    }

    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log('Kakao login success:', authObj);
        
        // 사용자 정보 가져오기
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (response) => {
            console.log('User info:', response);
            resolve({
              accessToken: authObj.access_token,
              userInfo: response
            });
          },
          fail: (error) => {
            console.error('Failed to get user info:', error);
            reject(error);
          }
        });
      },
      fail: (err) => {
        console.error('Kakao login failed:', err);
        reject(err);
      }
    });
  });
};

export const logoutWithKakao = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.Kakao) {
      window.Kakao.Auth.logout(() => {
        console.log('Kakao logout success');
        resolve();
      });
    } else {
      resolve();
    }
  });
};