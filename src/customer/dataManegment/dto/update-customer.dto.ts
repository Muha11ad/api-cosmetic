import { IsEmail, IsOptional, IsString, Length, Matches } from 'class-validator';
import { PASSWORD_LENGTH_ERROR, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from '../..';

export class CustomerUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  @Length(4, 20, { message: PASSWORD_LENGTH_ERROR })
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERROR })
  password: string;
}
