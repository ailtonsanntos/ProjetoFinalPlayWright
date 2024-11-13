export class DeleteAccountPage{
    constructor(page){
        this.page = page;
        this.title = this.page.getByRole('heading', { name: 'Account Deleted!' });
        

    }

}

module.exports = DeleteAccountPage;