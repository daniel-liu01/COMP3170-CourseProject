import { useState, useEffect } from "react";
import "./Comments.css";

export default function Comments({ gameId, gameName }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");


    useEffect(() => {

        if (!window.gameComments) {
            window.gameComments = {};
        }
        
        if (window.gameComments[gameId]) {
            setComments(window.gameComments[gameId]);
        }
    }, [gameId]);

    
    useEffect(() => {
        if (!window.gameComments) {
            window.gameComments = {};
        }
        window.gameComments[gameId] = comments;
    }, [comments, gameId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!newComment.trim() || !username.trim()) {
            return;
        }

        const comment = {
            id: Date.now(),
            username: username.trim(),
            text: newComment.trim(),
            timestamp: new Date().toISOString(),
        };

        setComments([comment, ...comments]);
        setNewComment("");
    };

    const handleDelete = (commentId) => {
        setComments(comments.filter((c) => c.id !== commentId));
    };

    return (
        <section className='comments-section game-detail-panel'>
            <h2 className='comments-title'>
                Comments ({comments.length})
            </h2>

            <form className='comment-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Your name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='username-input'
                    maxLength={30}
                />
                <textarea
                    placeholder={`Share your thoughts about ${gameName}...`}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className='comment-textarea'
                    rows={3}
                    maxLength={500}
                />
                <button
                    type='submit'
                    className='submit-comment-btn'
                    disabled={!newComment.trim() || !username.trim()}>
                    Post Comment
                </button>
            </form>

            <div className='comments-list'>
                {comments.length === 0 ? (
                    <p className='no-comments'>
                        No comments yet. Be the first to share your thoughts!
                    </p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className='comment-card'>
                            <div className='comment-header'>
                                <div className='comment-author'>
                                    <div className='author-avatar'>
                                        {comment.username[0].toUpperCase()}
                                    </div>
                                    <div className='author-info'>
                                        <span className='author-name'>
                                            {comment.username}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(comment.id)}
                                    className='delete-comment-btn'
                                    title='Delete comment'>
                                    ×
                                </button>
                            </div>
                            <p className='comment-text'>{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}