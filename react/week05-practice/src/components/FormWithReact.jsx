import { useForm } from "react-hook-form";

// useForm을 이용한 유효성 검사
export default function FormWithReact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("폼 데이터 제출:", data);
  };

  //   console.log("렌더링");
  return (
    <>
      <h1>Form with react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"text"} placeholder="이름" {...register("name", { required: true })} />
        {errors.name && <span>이름을 입력해주세요.</span>}

        <input
          type={"text"}
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "올바른 이메일 형식을 입력해주세요.",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input type={"password"} placeholder="비밀번호" {...register("password")} />
        <input type={"submit"} />
      </form>
    </>
  );
}
