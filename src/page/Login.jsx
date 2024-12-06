export default function Login() {
    return (
        <div className="login">
            <div className="login-gap"></div>
            <div className="login-mb">
                <h2 className="login-h2">로그인</h2>
            </div>
            <div className="login-form">
                <div className="login-id">
                    <label className="login-label">이메일</label>
                    <div className="login-wrapper">
                        <input className="login-input" placeholder="아이디"></input>
                    </div>
                </div>
                <div className="login-password">
                    <div className="login-lh">
                        <label className="login-label">비밀번호</label>
                        <div className="login-wrapper">
                            <input className="login-input" placeholder="********"></input>
                        </div>
                    </div>
                </div>
                <div></div>
                <button className="login-button">
                    <div className="login-button-inner">
                        <span className="login-span">가입하기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}