import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';

@Module({
  providers: [HashingService, BcryptService, AuthenticationService],
  controllers: [AuthenticationController]
})
export class IamModule {}
