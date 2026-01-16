import { useForm } from "react-hook-form"; 
import { useNavigate, Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register: signup } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signup(data);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
          />

          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
          />

          <button className="w-full bg-secondary text-white py-3 rounded-full font-semibold">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
