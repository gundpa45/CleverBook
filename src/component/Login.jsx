import logo from "../assets/mian logo.png";

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-[#151218] to-[#2b1339] text-white px-4">
            {/* Logo and Heading */}
            <div className="flex items-center mb-10">
                <img src={logo} alt="Logo" className="h-20 w-20 rounded-full shadow-lg" />
                <h1 className="text-5xl font-semibold ml-4 tracking-wide">CleverBook</h1>
            </div>

            {/* Form Card */}
            <form className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-10 text-white space-y-6">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <div className="flex items-center justify-between">
                    <a href="#" className="text-sm text-purple-400 hover:text-white transition">Forgot password?</a>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition w-28 h-10 rounded-xl text-white font-medium shadow-md"
                    >
                        Login
                    </button>
                </div>
            </form>

            {/* Other Options */}
            <div className="text-sm text-purple-300 text-center mt-6 space-y-2">
                <p className="hover:text-white transition cursor-pointer">Don't have an account?</p>
                <p className="text-white">or</p>
                <p className="hover:text-white transition cursor-pointer">Login with Spotify</p>
            </div>

            {/* Footer */}
            <div className="mt-10 text-xs text-purple-300">
                Privacy Policy | Terms of Service
            </div>
        </div>
    );
}

export default Login;
