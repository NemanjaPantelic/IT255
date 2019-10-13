package it255;

public class TimeModel {

    private String date;
    private Long milliseconds_since_epoch;
    private String time;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getMilliseconds_since_epoch() {
        return milliseconds_since_epoch;
    }

    public void setMilliseconds_since_epoch(Long milliseconds_since_epoch) {
        this.milliseconds_since_epoch = milliseconds_since_epoch;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "TimeModel{" + "date=" + date + ", milliseconds_since_epoch=" + milliseconds_since_epoch + ", time=" + time + '}';
    }
    
    

}
