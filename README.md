# reversichess
Chess with reversi mechanics

Demo: https://reversichess.netlify.app/

## How To Play
Pieces move like regular chess pieces and all chess mechanics happen before any reversi style "flipping".
Special cases:
-An en passant captures then checks for all possible flips.
-Castling causes causes flips resulting from the king's move but not the rooks 

There currently is no check/checkmate so the game ends when you capture or flip the opponents king.

A flip happens if a move causes there to be two pieces of the same color with a solid line of opposite color pieces in between them, the pieces in between flip colors to be the same color as the surrounding pieces.

## 

Uses [chessboard.js](https://github.com/oakmac/chessboardjs/) and a modified [chess.js](https://github.com/jhlywa/chess.js) to work
