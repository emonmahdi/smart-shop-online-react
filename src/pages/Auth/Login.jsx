import { useForm } from "react-hook-form"; 
import { useNavigate, Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to SmartShop
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email required</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
          />

          <button className="w-full bg-primary text-white py-3 rounded-full font-semibold">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          New user?{" "}
          <Link to="/register" className="text-secondary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
