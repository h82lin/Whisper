pragma solidity >=0.4.25 <0.7.0;

contract UploadMusic {

	struct Music{
		string title;
		string artist;
		string genre;
		string publishDate;
		string musicURL;
		string albumArt;
		uint like;
	}

	mapping (uint => address) idToOwner;
	mapping (address => uint) musicCount;
	Music[] musicArray;


	function uploadMusic(string memory _title, string memory _artist, string memory _genre, string memory _publishDate, string memory _musicURL, string memory _albumArt) public {
    uint id = musicArray.push(Music(_title, _artist, _genre, _publishDate, _musicURL, _albumArt, 0)) - 1;
		idToOwner[id] = msg.sender;
    musicCount[msg.sender]++;
	}

	function getMusicByOwner(address _owner) external view returns(uint[] memory) {
		uint[] memory result = new uint[](musicCount[_owner]);
		uint counter = 0;
		for (uint i = 0; i < musicArray.length; i++) {
			if (idToOwner[i] == _owner) {
				result[counter] = i;
				counter++;
			}
		}
		return result;
	}
	//mapping
	// function musicOwner(uint _id) public view uint _id)uint _id)returns(address) {
	// 	return idToOwner[_id];
	// }
	// function musicCount(address _address) public view returns(uint) {
	// 	return musicCount[_address];
	// }

	//get
	function getLength() public view returns(uint) {
		return musicArray.length;
	}
	function getTitle(uint _id) public view returns(string memory) {
		return musicArray[_id].title;
	}
	function getArtist(uint _id) public view returns(string memory) {
		return musicArray[_id].artist;
	}
	function getGenre(uint _id) public view returns(string memory) {
		return musicArray[_id].genre;
	}
	function getPublishDate(uint _id) public view returns(string memory) {
		return musicArray[_id].publishDate;
	}
	function getMusicURL(uint _id) public view returns(string memory) {
		return musicArray[_id].musicURL;
	}
	function getAlbumArt(uint _id) public view returns(string memory) {
		return musicArray[_id].albumArt;
	}
	//change
	function changeTitle (uint _id, string memory _newTitle) public {
		musicArray[_id].title = _newTitle;
	}
	function changeAlbumArt (uint _id, string memory _newAlbumArt) public {
		musicArray[_id].albumArt = _newAlbumArt;
	}
	//function changeDescription (uint _id, string memory _newDescription) public {
	//	musicArray[_id].description = _newDescription;
	//}
	//like
	function thumbsUp (uint _id) public {
		musicArray[_id].like ++;
	}
	function totalLike(uint _id) public view returns(uint) {
		return musicArray[_id].like;
	}
}
