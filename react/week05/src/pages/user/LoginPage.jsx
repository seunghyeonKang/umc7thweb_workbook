import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as A from "./LoginPage.style";
import { useState } from "react";

export default function LoginPage() {
  const [isValid, setIsValid] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!"),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .min(8, "비밀번호는 8 ~ 16자 사이로 입력해주세요.")
      .max(16, "비밀번호는 8 ~ 16자 사이로 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출: ", data);
  };

  return (
    <A.Container>
      <A.Contents>로그인</A.Contents>

      <A.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <A.InputBox type="text" placeholder="이메일을 입력해주세요." {...register("email")} />
        <A.SpanText>{errors.email?.message}</A.SpanText>
        <A.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password")}
        />
        <A.SpanText>{errors.password?.message}</A.SpanText>
        <A.SubmitBox type="submit" value="로그인" isValid={isValid} $hoverColor="#a51a36" />
      </A.FormContainer>
    </A.Container>
  );
}
