package com.crickinformer.cricketApp.services;

import com.crickinformer.cricketApp.entity.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    //get all matches
    List<Match> getAllMatches();

    //getlive matches
    List<Match> getLiveMatches();

    //get cwc point point table
    List<List<String>> getPointTable();
}
