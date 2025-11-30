import { useState, useEffect } from "react";
import "./Comments.css";

export default function Comments({ gameId, gameName }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (!gameId) return;
        
        try {
            const storageKey = `game_comments_${gameId}`;
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                const parsedComments = JSON.parse(stored);
                setComments(parsedComments);
            } else {
                setComments([]);
            }
        } catch (error) {
            console.error("Failed to load comments:", error);
            setComments([]);
        }
    }, [gameId]);

    const saveComments = (updatedComments) => {
        try {
            const storageKey = `game_comments_${gameId}`;
            localStorage.setItem(storageKey, JSON.stringify(updatedComments));
            setComments(updatedComments);
        } catch (error) {
            console.error("Failed to save comments:", error);
        }
    };

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

        const updatedComments = [comment, ...comments];
        saveComments(updatedComments);
        setNewComment("");
    };

    const handleDelete = (commentId) => {
        const updatedComments = comments.filter((c) => c.id !== commentId);
        saveComments(updatedComments);
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