import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// yup을 이용한 유효성 검사
export default function FormWithYup() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("이메일을 형식으로 작성해주세요.")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .required("비밀번호를 반드시 입력해주세요.")
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출:", data);
  };

  console.log("렌더링");
  return (
    <>
      <h1>Form with yup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"text"} placeholder="이름" {...register("name", { required: true })} />

        <input type={"text"} placeholder="이메일" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <input type={"password"} placeholder="비밀번호" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <input type={"submit"} />
      </form>
    </>
  );
}
