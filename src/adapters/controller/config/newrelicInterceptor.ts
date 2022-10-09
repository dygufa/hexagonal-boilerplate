import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import newrelic from "newrelic";

@Injectable()
export class NewrelicInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return newrelic.startWebTransaction(context.getHandler().name, function () {
            const transaction = newrelic.getTransaction();
            return next.handle().pipe(tap(() => transaction.end()));
        });
    }
}
