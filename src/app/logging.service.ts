export class LoggingService {
    logStatusChange(status: string) {
        // tslint:disable-next-line:member-ordering
        console.log('A server status changed, new status: ' + status);
    }
}
