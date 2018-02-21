namespace HiP4.Controllers
{
    export class ViewPostController
    {
        public post;
        public postId;
        public reply;
        public replys;
        public replyId;
        public replied;
        public repliedLength;

        constructor(private postsService: HiP4.Services.PostsService,
            private replyService: HiP4.Services.ReplyService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
        private $window: ng.IWindowService)
        {
            this.postId = this.$stateParams['id'];
            this.getPost();
            this.getPostReply();
            
            

        }

        likePost()
        {
            
            this.post.likes = this.post.likes + 1;
            this.postsService.updatePost(this.post).then(() =>
            {
                this.$state.go("home");

            });

        }

        likeReply()
        {

            this.reply.likes = this.reply.likes + 1;
            this.replyService.updateReply(this.reply).then(() =>
            {
                this.$state.go("home");

            });

        }
            
    

        getPost()
        {
            debugger;
            this.post = this.postsService.getPost(this.postId);
        }

        createReply()
        {
            debugger;
            this.replys.postId = this.postId;
            this.replys.isActive = true;
            this.replyService.saveReply(this.replys).then(() =>
            {
                this.$state.reload();
            });
        }

        getPostReply()
        {
            debugger;
            this.reply = this.replyService.getPostReplies(this.postId);

        }

        replyToReply(id)
        {
            debugger;
            this.replys.replyId = id;
            this.replys.isActive = true;
            this.replyService.saveReply(this.replys).then(() =>
            {
                this.$state.reload();
            });
        }

        getRepliesToReply(id)
        {
            debugger;
            
            this.replied = this.replyService.getRepliesToReply(id);
            
        }

    }




}